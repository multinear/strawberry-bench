<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let model;
  export let family;
  export let maxCost;
  export let maxResponseTime;
  export let maxTokens;
  export let providers;
  export let isExpanded = false;
  export let isExpandButtonVisible = false;

  // Get provider display name
  $: providerName = providers.find(p => p.name === family.provider)?.display_name;

  // Format price for display
  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }

  // Format cost for display
  function formatCost(cost) {
    return cost != null ? `$${cost.toFixed(5)}` : '-';
  }

  // Get max delta percentage
  function getMaxDeltaPercent(min, max, avg) {
    const minDelta = Math.abs(min - avg) / avg * 100;
    const maxDelta = Math.abs(max - avg) / avg * 100;
    return Math.max(minDelta, maxDelta);
  }

  // Format time for display
  function formatTime(seconds) {
    return seconds >= 10 ? Math.round(seconds) : seconds.toFixed(1);
  }

  // Function to generate mini bar chart segments
  function getPassRateSegments(passed, total) {
    return Array(total).fill(null).map((_, i) => i < passed);
  }

  // Calculate percentages for indicator lines
  $: costPercentage = maxCost > 0 && model.avgCost != null ? (model.avgCost / maxCost * 100) : 0;
  $: responseTimePercentage = maxResponseTime > 0 ? (model.avgResponseTime / maxResponseTime * 100) : 0;
  $: tokenPercentage = maxTokens > 0 ? (model.avgTokens / maxTokens * 100) : 0;
</script>

<td class="flex items-center py-2">
  <div class="w-8 flex items-center justify-start">
    {#if isExpandButtonVisible}
      <button 
        class="btn btn-xs btn-ghost" 
        on:click|stopPropagation={() => dispatch('toggleExpand')}
      >
        {isExpanded ? '▼' : '▶'}
      </button>
    {:else}
      <div class="w-8"></div>
    {/if}
  </div>
  <div>
    <span>
      {#if providerName}
        <span class="text-base-content/70">{providerName} / </span>
      {/if}
      {model.name}
    </span>
  </div>
</td>
<td class="py-2">
  {#if model.passed}
    <span class="badge badge-success text-white">PASSED</span>
  {:else}
    <span class="badge badge-error text-white">FAILED</span>
  {/if}
</td>
<td class="py-2">
  <div class="flex gap-2 items-center">
    <div class="flex gap-px items-center">
      {#each getPassRateSegments(model.passRate, model.totalTests) as passed}
        <div class="w-2 h-4 {passed ? 'bg-success' : 'bg-error'}"></div>
      {/each}
    </div>
    <span class="text-sm tabular-nums">{model.passRate}/{model.totalTests}</span>
  </div>
</td>
<td class="py-2">
  <div class="flex items-center gap-2 tooltip" data-tip="Min: {model.minTokens} tokens
Max: {model.maxTokens} tokens">
    <div class="flex flex-col" style="width: 100px">
      <div class="flex items-center gap-2">
        <span class="font-semibold">{Math.round(model.avgTokens)}</span>
        <span class="text-xs text-base-content/50">±{getMaxDeltaPercent(model.minTokens, model.maxTokens, model.avgTokens).toFixed(0)}%</span>
      </div>
      <div class="h-[2px] bg-error/30 mt-0.5" style="width: {Math.max(tokenPercentage, 5)}%"></div>
    </div>
  </div>
</td>
<td class="py-2">
  {#if model.hasPricing}
    <div class="flex items-center gap-2">
      <div class="tooltip" data-tip="Min: {formatCost(model.minCost)}, Max: {formatCost(model.maxCost)}
Cost: {formatPrice(family.price_input_tokens)}/{formatPrice(family.price_output_tokens)} per 1M tokens (in/out)">
        <div class="flex flex-col" style="width: 100px">
          <div class="flex items-center gap-2">
            <span class="font-mono">{formatCost(model.avgCost)}</span>
            <!-- <span class="text-xs text-base-content/50">±{getMaxDeltaPercent(model.minCost, model.maxCost, model.avgCost).toFixed(0)}%</span> -->
          </div>
          {#if model.avgCost != null && maxCost > 0}
            <div class="h-[2px] bg-error/30 mt-0.5" style="width: {Math.max(costPercentage, 5)}%"></div>
          {/if}
        </div>
      </div>
    </div>
  {:else}
    <span class="text-base-content/50">-</span>
  {/if}
</td>
<td class="py-2">
  <div class="flex items-center gap-2 tooltip" data-tip="Min: {formatTime(model.minResponseTime)}s, Max: {formatTime(model.maxResponseTime)}s">
    <div class="flex flex-col" style="width: 100px">
      <div class="flex items-center gap-2">
        <span class="font-semibold">{formatTime(model.avgResponseTime)}s</span>
        <span class="text-xs text-base-content/50">±{getMaxDeltaPercent(model.minResponseTime, model.maxResponseTime, model.avgResponseTime).toFixed(0)}%</span>
      </div>
      <div class="h-[2px] bg-error/30 mt-0.5" style="width: {Math.max(responseTimePercentage, 5)}%"></div>
    </div>
  </div>
</td> 