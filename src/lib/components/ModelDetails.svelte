<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let model;
  export let family;

  // Helper functions
  function formatPrice(price) {
    return `$${price?.toFixed(2)}`;
  }

  function formatCost(cost) {
    return `$${cost?.toFixed(5)}`;
  }

  function formatTime(seconds) {
    return seconds >= 10 ? Math.round(seconds) : seconds.toFixed(1);
  }

  function close() {
    dispatch('close');
  }

  function scrollToTask(index) {
    const taskElement = document.getElementById(`task-${index}`);
    if (taskElement) {
      taskElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
</script>

<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 cursor-pointer"
     role="button"
     tabindex="0"
     on:click|self={close}
     on:keydown|self={e => e.key === 'Enter' && close()}>
  <div class="bg-base-100 rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto cursor-default">
    <div class="flex flex-col gap-6">
      <!-- Header with close button -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold break-words">{model.name}</h2>
        <button class="btn btn-sm btn-ghost" on:click={close}>×</button>
      </div>

      <!-- Status row -->
      <div class="bg-base-200 rounded-lg p-4">
        <div class="flex justify-between items-center">
          <div class="flex gap-4 items-center">
            <div class="flex gap-px items-center flex-none">
              {#each model.details as test, i}
                  <div 
                    class="w-3 h-6 {test.correct ? 'bg-success/80' : 'bg-error/80'} cursor-pointer hover:opacity-80 transition-opacity" 
                    on:click={() => scrollToTask(i)}
                    role="button"
                    tabindex="0"
                    on:keydown={e => e.key === 'Enter' && scrollToTask(i)}
                  ></div>
              {/each}
            </div>
            <span class="badge {model.passed ? 'badge-success' : 'badge-error'} text-white">
              {model.passed ? 'PASSED' : 'FAILED'}
            </span>
          </div>
          <div class="flex gap-6 text-sm">
            <div>
              <span class="text-base-content/70">Tokens:</span>
              <span class="font-mono ml-1">{model.avgTokens}</span>
            </div>
            <div>
              <span class="text-base-content/70">Cost:</span>
              <span class="font-mono ml-1">{formatCost(model.avgCost)}</span>
            </div>
            <div>
              <span class="text-base-content/70">Time:</span>
              <span class="font-mono ml-1">{formatTime(model.avgResponseTime)}s</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Test details -->
      {#each model.details as test, i}
        <div class="flex flex-col gap-4" id="task-{i}">
          <!-- Result row -->
          <div class="bg-{test.correct ? 'success' : 'error'} bg-opacity-20 p-4 rounded-lg">
            <div class="flex justify-between items-center text-base-content">
              <span class="badge {test.correct ? 'badge-success' : 'badge-error'} text-white">
                {test.correct ? 'PASS' : 'FAIL'}
              </span>
              <div class="text-sm space-x-4">
                <span class="text-base-content/70">Tokens:</span> <span>{test.tokens}</span>
                {#if test.cost != null}
                  <span class="tooltip" data-tip="Using {formatPrice(family.price_input_tokens)}/{formatPrice(family.price_output_tokens)} per 1M tokens (in/out)">
                    <span class="text-base-content/70">Cost:</span> <span>{formatCost(test.cost)}</span>
                  </span>
                {/if}
                <span class="text-base-content/70">Time:</span> <span>{formatTime(test.responseTime)}s</span>
              </div>
            </div>
          </div>

          <!-- Content grid -->
          <div class="grid grid-cols-3 gap-6">
            <!-- Input/Output column -->
            <div class="space-y-4 col-span-2">
              <div class="bg-base-200 rounded-lg p-4">
                <h3 class="font-medium mb-2">Input</h3>
                <pre class="whitespace-pre-wrap text-sm">{test.input}</pre>
              </div>
              <div class="bg-base-200 rounded-lg p-4">
                <h3 class="font-medium mb-2">Output</h3>
                <pre class="whitespace-pre-wrap text-sm">{test.output}</pre>
              </div>
              {#if test.reasoning}
                <div class="bg-base-200 rounded-lg p-4">
                  <h3 class="font-medium mb-2">Reasoning</h3>
                  <pre class="whitespace-pre-wrap text-sm">{test.reasoning}</pre>
                </div>
              {/if}
            </div>

            <!-- Evaluation column -->
            <div class="space-y-4">
              {#each test.evaluations as evaluation}
                <div class="bg-base-200 rounded-lg p-4">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-medium">{evaluation.criterion}</h3>
                    <span class="badge {evaluation.score === 1 ? 'badge-success' : 'badge-error'} text-white">
                      {evaluation.score === 1 ? 'PASS' : 'FAIL'}
                    </span>
                  </div>
                  {#if evaluation.rationale}
                    <pre class="whitespace-pre-wrap text-sm">{evaluation.rationale}</pre>
                  {/if}
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
