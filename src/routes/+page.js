import { base } from '$app/paths';
import yaml from 'js-yaml';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  // Load models configuration
  const modelsYaml = await fetch(`${base}/data/models.yaml`).then(r => r.text());
  const modelsConfig = yaml.load(modelsYaml);
  
  // Load each model's data
  const modelResults = await Promise.all(
    modelsConfig.models.map(async (modelConfig) => {
      try {
        const response = await fetch(`${base}/data/${modelConfig.file}`);
        const data = await response.json();

        // Find family config for pricing
        const family = modelsConfig.families.find(f => f.name === modelConfig.family);
        const hasPricing = family?.price_input_tokens != null && family?.price_output_tokens != null;
        const costPerInputToken = hasPricing ? family.price_input_tokens / 1_000_000 : null;
        const costPerOutputToken = hasPricing ? family.price_output_tokens / 1_000_000 : null;

        // Check if data has the expected structure
        if (!data || !data.details || !Array.isArray(data.details.results)) {
          console.error('Unexpected data structure for model:', modelConfig.file, data);
          return null;
        }

        const results = data.details.results;
        const details = results.map(result => {
          const [request, evaluation] = result;
          const detail = {
            input: "How many Rs are in strawberry?",
            output: request.output,
            reasoning: request.details.reasoning,
            evaluations: evaluation.details.evaluations,
            correct: evaluation.passed,
            tokens: request.details.prompt_tokens + request.details.completion_tokens,
            prompt_tokens: request.details.prompt_tokens,
            completion_tokens: request.details.completion_tokens,
            responseTime: request.details.response_time
          };

          // Only add cost if pricing is available
          if (hasPricing) {
            detail.cost = (request.details.prompt_tokens * costPerInputToken) + 
                         (request.details.completion_tokens * costPerOutputToken);
          }

          return detail;
        });

        const totalTests = details.length;
        const passRate = details.filter(d => d.correct).length;
        const passed = passRate === totalTests;

        const avgTokens = details.reduce((sum, d) => sum + d.tokens, 0) / totalTests;
        const minTokens = Math.min(...details.map(d => d.tokens));
        const maxTokens = Math.max(...details.map(d => d.tokens));

        const result = {
          name: modelConfig.display_name,
          family: modelConfig.family,
          order: modelsConfig.models.indexOf(modelConfig),
          passed,
          passRate,
          totalTests,
          avgTokens,
          minTokens,
          maxTokens,
          avgResponseTime: details.reduce((sum, d) => sum + d.responseTime, 0) / totalTests,
          minResponseTime: Math.min(...details.map(d => d.responseTime)),
          maxResponseTime: Math.max(...details.map(d => d.responseTime)),
          details,
          hasPricing
        };

        // Only add cost metrics if pricing is available
        if (hasPricing) {
          result.avgCost = details.reduce((sum, d) => sum + d.cost, 0) / totalTests;
          result.minCost = Math.min(...details.map(d => d.cost));
          result.maxCost = Math.max(...details.map(d => d.cost));
        }

        return result;
      } catch (error) {
        console.error('Error processing model:', modelConfig.file, error);
        return null;
      }
    })
  );

  // Filter out any failed loads and sort by order
  const validResults = modelResults.filter(result => result !== null);
  validResults.sort((a, b) => a.order - b.order);

  return {
    modelResults: validResults,
    families: modelsConfig.families
  };
}
