import { ref, computed, Ref } from 'vue';

export default function useRepositoryNameSearch(repositories: Ref<Object[]>) {
  const searchQuery = ref('');

  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter(repository => {
      // search 条件
      return true;
    });
  });



  return {
    searchQuery,
    repositoriesMatchingSearchQuery,

  };

}