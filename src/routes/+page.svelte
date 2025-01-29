<script>
  import ModelDetails from '$lib/components/ModelDetails.svelte';
  import ModelTable from '$lib/components/ModelTable.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { browser } from '$app/environment';
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  let selectedModel = null;
  let expandedFamilies = new Set();
  let sortField = 'order';
  let sortDirection = 'asc';

  const selectedTestGroup = writable(null);

  onMount(() => {
    // Set initial test group from hash or default to first group
    const hash = window.location.hash.slice(1);
    selectedTestGroup.set(data.testGroups[hash] ? hash : Object.keys(data.testGroups)[0]);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (data.testGroups[newHash]) {
        selectedTestGroup.set(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  });

  // Update URL hash when test group changes
  $: if (browser && $selectedTestGroup && window.location.hash.slice(1) !== $selectedTestGroup) {
    window.location.hash = $selectedTestGroup;
  }

  function showDetails(model) {
    selectedModel = model;
  }

  function closeDetails() {
    selectedModel = null;
  }

  function handleKeydown(event) {
    if (event.key === 'Escape' && selectedModel) {
      closeDetails();
    }
  }

  function toggleFamily(family) {
    if (expandedFamilies.has(family)) {
      expandedFamilies.delete(family);
    } else {
      expandedFamilies.add(family);
    }
    expandedFamilies = expandedFamilies; // trigger reactivity
  }

  function toggleSort(field) {
    if (sortField === field) {
      if ((sortDirection === 'desc' && field !== 'passRate') || (sortDirection === 'asc' && field === 'passRate')) {
        sortDirection = 'desc';
        sortField = 'order';  // Reset to original order
      }
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortField = field;
      // Set initial direction based on field
      switch (field) {
        case 'passRate':
          sortDirection = 'desc';
          break;
        case 'name':
        case 'passed':
        case 'tokens':
        case 'cost':
        case 'time':
        default:
          sortDirection = 'asc';
      }
    }
  }

  function getSortValue(model, field, family) {
    switch (field) {
      case 'name':
        return (family.provider + '/' + model.name).toLowerCase();
      case 'passed':
        return model.passed ? 1 : 0;
      case 'passRate':
        return model.passRate / model.totalTests;
      case 'tokens':
        return model.avgTokens;
      case 'cost':
        return model.avgCost;
      case 'time':
        return model.avgResponseTime;
      case 'order':
        return model.originalIndex;
      default:
        return 0;
    }
  }

  // First, get the current test group
  $: currentTestGroup = $selectedTestGroup ? data.testGroups[$selectedTestGroup] : null;

  // Then, get the model results for the current group
  $: modelResults = currentTestGroup?.modelResults ?? [];

  // Finally, group models by family for the current test group
  $: modelsByFamily = modelResults.reduce((acc, model, index) => {
    // Add original index for maintaining initial order
    model.originalIndex = index;
    if (!acc[model.family]) {
      acc[model.family] = [];
    }
    acc[model.family].push(model);
    return acc;
  }, {});

  // Sort families based on their best models from the current group
  $: sortedFamilies = data.families
    .filter(family => modelsByFamily[family.name]?.length > 0)  // Only include families that have models in current group
    .map(family => {
      const models = [...(modelsByFamily[family.name] || [])];
      const bestModel = models[0];
      return {
        ...family,
        models,
        sortValue: bestModel ? getSortValue(bestModel, sortField, family) : null
      };
    })
    .sort((a, b) => {
      if (a.sortValue === null) return 1;
      if (b.sortValue === null) return -1;
      const direction = sortDirection === 'asc' ? 1 : -1;
      return (a.sortValue > b.sortValue ? 1 : -1) * direction;
    });

  // Get family config by name
  function getFamilyConfig(familyName) {
    return data.families.find(f => f.name === familyName);
  }

  // Event handlers for ModelTable events
  function handleTableEvent(event) {
    const { detail } = event;
    switch (event.type) {
      case 'toggleSort':
        toggleSort(detail.field);
        break;
      case 'showDetails':
        showDetails(detail.model);
        break;
      case 'toggleFamily':
        toggleFamily(detail.family);
        break;
    }
  }
</script>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">Strawberry Bench 🍓</h1>

  <div class="flex justify-between items-center mb-6">
    <div class="flex items-center gap-2">
      {#if currentTestGroup && currentTestGroup.description}
        <p class="text-base-content/70 mt-2 pl-4">{currentTestGroup.description}</p>
      {/if}  
    </div>
    <div class="flex items-center gap-2">
      {#each Object.entries(data.testGroups) as [id, group]}
        <button 
          class="btn btn-sm {$selectedTestGroup === id ? 'bg-base-200 border-base-content/20' : 'btn-ghost'}"
          on:click={() => selectedTestGroup.set(id)}
        >
          {group.name}
        </button>
      {/each}
    </div>
  </div>
  
  <ModelTable 
    {sortField}
    {sortDirection}
    {expandedFamilies}
    families={sortedFamilies}
    providers={data.providers}
    on:toggleSort={handleTableEvent}
    on:showDetails={handleTableEvent}
    on:toggleFamily={handleTableEvent}
  />

  <div class="flex justify-center mt-8 text-sm text-base-content/70 gap-8">
    <a href="https://multinear.com" class="flex items-center gap-2 hover:text-base-content transition-colors" target="_blank">
      <img src={`${base}/mirable.png`} alt="Mirable" class="h-6 w-8" />
      Built by Multinear
    </a>
    <a href="https://github.com/multinear/strawberry-bench" class="flex items-center gap-2 hover:text-base-content transition-colors" target="_blank">
      <div class="w-6 h-6 rounded-full bg-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="h-6 w-6">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.046.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.22.694.825.576C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </div>
      View on GitHub
    </a>
  </div>
</div>

<svelte:window on:keydown={handleKeydown}/>

{#if selectedModel}
  <ModelDetails 
    model={selectedModel} 
    family={getFamilyConfig(selectedModel.family)} 
    on:close={closeDetails}
  />
{/if}
