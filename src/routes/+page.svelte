<script>
  import ModelDetails from '$lib/components/ModelDetails.svelte';
  import ModelTable from '$lib/components/ModelTable.svelte';
  
  /** @type {import('./$types').PageData} */
  export let data;
  
  let selectedModel = null;
  let expandedFamilies = new Set();
  let sortField = 'order';
  let sortDirection = 'asc';

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
          sortDirection = 'asc';
          break;
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

  // Group models by family and find best model for each family
  $: modelsByFamily = data.modelResults.reduce((acc, model, index) => {
    // Add original index for maintaining initial order
    model.originalIndex = index;
    if (!acc[model.family]) {
      acc[model.family] = [];
    }
    acc[model.family].push(model);
    return acc;
  }, {});

  // Get family config by name
  function getFamilyConfig(familyName) {
    return data.families.find(f => f.name === familyName);
  }

  // Sort only the families based on their best models
  $: sortedFamilies = data.families.map(family => {
    const models = [...(modelsByFamily[family.name] || [])];
    // Get the best model (first one) for sorting
    const bestModel = models[0];
    return {
      ...family,
      models,
      sortValue: bestModel ? getSortValue(bestModel, sortField, family) : null
    };
  }).sort((a, b) => {
    if (a.sortValue === null) return 1;
    if (b.sortValue === null) return -1;
    const direction = sortDirection === 'asc' ? 1 : -1;
    return (a.sortValue > b.sortValue ? 1 : -1) * direction;
  });

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
  <h1 class="text-3xl font-bold mb-6">Strawberry Bench</h1>
  
  <ModelTable 
    {sortField}
    {sortDirection}
    {expandedFamilies}
    families={sortedFamilies}
    on:toggleSort={handleTableEvent}
    on:showDetails={handleTableEvent}
    on:toggleFamily={handleTableEvent}
  />
</div>

<svelte:window on:keydown={handleKeydown}/>

{#if selectedModel}
  <ModelDetails 
    model={selectedModel} 
    family={getFamilyConfig(selectedModel.family)} 
    on:close={closeDetails}
  />
{/if}
