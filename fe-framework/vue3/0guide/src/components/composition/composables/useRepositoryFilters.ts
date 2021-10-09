
import { ref, computed } from 'vue';

export default function useRepositoryFilters() {
  const filters = ref({});

  const filteredRepositories = computed(() => { });

  const updateFilters = () => { };

  return {
    filters,
    filteredRepositories,
    updateFilters
  };

}