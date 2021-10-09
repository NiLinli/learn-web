
<script lang="ts">
import { toRefs } from "vue";
import {
  useUserRepositories,
  useRepositoryNameSearch,
  useRepositoryFilters,
} from "./composables/index";

export default {
  name: "UserRepositoriesWithSetup",
  setup(props: any) {
    const { user } = toRefs(props);

    const { repositories, getUserRepositories } = useUserRepositories(user);

    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories);

    return {
      repositories,
      getUserRepositories,
      searchQuery,
      repositoriesMatchingSearchQuery,
    };
  },
};
</script>
