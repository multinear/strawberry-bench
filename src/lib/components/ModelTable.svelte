<script>
  import { createEventDispatcher } from 'svelte';
  import ModelRow from './ModelRow.svelte';
  const dispatch = createEventDispatcher();

  export let families;
  export let sortField = 'order';
  export let sortDirection = 'asc';
  export let expandedFamilies;

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
      {#each families as family}
        {@const bestModel = family.models[0]}
        {@const hasMoreModels = family.models.length > 1}
        
        <!-- Best model in family -->
        <ModelRow 
          model={bestModel}
          {family}
          {maxCost}
          {maxResponseTime}
          hasExpandButton={true}
          isExpandButtonVisible={hasMoreModels}
          isExpanded={expandedFamilies.has(family.name)}
          on:showDetails
          on:toggleExpand={() => dispatch('toggleFamily', { family: family.name })}
        />

        <!-- Other models in family when expanded -->
        {#if expandedFamilies.has(family.name) && hasMoreModels}
          {#each family.models.slice(1) as model}
            <ModelRow 
              {model}
              {family}
              {maxCost}
              {maxResponseTime}
              on:showDetails
            />
          {/each}
        {/if}
      {/each}
    </tbody>
  </table>
</div> 