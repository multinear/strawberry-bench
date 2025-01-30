<script>
  import { createEventDispatcher } from 'svelte';
  import ModelRow from './ModelRow.svelte';
  import { flip } from 'svelte/animate';
  import { fade, fly } from 'svelte/transition';
  const dispatch = createEventDispatcher();

  export let families;
  export let sortField = 'order';
  export let sortDirection = 'asc';
  export let expandedFamilies;
  export let providers;

  // Calculate max average cost across all models that are visible
  $: maxCost = Math.max(...families.flatMap(family => {
    const bestModel = family.models[0];
    const otherModels = expandedFamilies.has(family.name) ? family.models.slice(1) : [];
    return [...(bestModel ? [bestModel] : []), ...otherModels]
      .map(model => model.avgCost || 0);
  }));

  // Calculate max response time across all visible models
  $: maxResponseTime = Math.max(...families.flatMap(family => {
    const bestModel = family.models[0];
    const otherModels = expandedFamilies.has(family.name) ? family.models.slice(1) : [];
    return [...(bestModel ? [bestModel] : []), ...otherModels]
      .map(model => model.avgResponseTime || 0);
  }));

  // Calculate max tokens across all visible models
  $: maxTokens = Math.max(...families.flatMap(family => {
    const bestModel = family.models[0];
    const otherModels = expandedFamilies.has(family.name) ? family.models.slice(1) : [];
    return [...(bestModel ? [bestModel] : []), ...otherModels]
      .map(model => model.avgTokens || 0);
  }));

  // Flatten visible models for animation
  $: visibleModels = families.flatMap(family => {
    const bestModel = family.models[0];
    const otherModels = expandedFamilies.has(family.name) ? family.models.slice(1) : [];
    return [...(bestModel ? [bestModel] : []), ...otherModels].map(model => ({
      model,
      family,
      hasExpandButton: true,
      isExpandButtonVisible: family.models.length > 1 && model === bestModel,
      isExpanded: expandedFamilies.has(family.name)
    }));
  });
</script>

<div class="overflow-x-auto">
  <table class="table table-zebra w-full">
    <thead>
      <tr class="text-[0.95rem]">
        <th class="cursor-pointer pl-12" on:click={() => dispatch('toggleSort', { field: 'name' })}>
          Model
          {#if sortField === 'name'}
            <span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
          {/if}
        </th>
        <th class="cursor-pointer" on:click={() => dispatch('toggleSort', { field: 'passed' })}>
          Results
          {#if sortField === 'passed'}
            <span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
          {/if}
        </th>
        <th class="cursor-pointer" on:click={() => dispatch('toggleSort', { field: 'passRate' })}>
          Pass Rate
          {#if sortField === 'passRate'}
            <span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
          {/if}
        </th>
        <th class="cursor-pointer" on:click={() => dispatch('toggleSort', { field: 'tokens' })}>
          Tokens
          {#if sortField === 'tokens'}
            <span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
          {/if}
        </th>
        <th class="cursor-pointer" on:click={() => dispatch('toggleSort', { field: 'cost' })}>
          Cost
          {#if sortField === 'cost'}
            <span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
          {/if}
        </th>
        <th class="cursor-pointer" on:click={() => dispatch('toggleSort', { field: 'time' })}>
          Response Time
          {#if sortField === 'time'}
            <span class="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
          {/if}
        </th>
      </tr>
    </thead>
    <tbody>
      {#each visibleModels as { model, family, hasExpandButton, isExpandButtonVisible, isExpanded } (model.id)}
        <tr 
          class="hover:bg-base-200 cursor-pointer {!hasExpandButton ? 'bg-base-200/30' : ''}"
          on:click={() => dispatch('showDetails', { model })}
          animate:flip={{duration: 700}}
          in:fly|local={{y: 20, duration: 700}}
          out:fade|local
        >
          <ModelRow 
            {model}
            {family}
            {maxCost}
            {maxResponseTime}
            {maxTokens}
            {providers}
            {isExpandButtonVisible}
            {isExpanded}
            on:showDetails
            on:toggleExpand={() => dispatch('toggleFamily', { family: family.name })}
          />
        </tr>
      {/each}
    </tbody>
  </table>
</div> 