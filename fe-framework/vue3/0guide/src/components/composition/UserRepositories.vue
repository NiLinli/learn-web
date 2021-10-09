<script lang="ts">
import { defineComponent } from "vue";
import fetchUserRepositories from "./fetchUserRepositories";

export default defineComponent({
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      repositories: [], // 1
      searchQuery: "", // 2
      filters: {}, // 3
    } as {
      repositories: Object[];
      searchQuery: string;
      filters: Object;
    };
  },
  computed: {
    repositoriesMatchingSearchQuery() {}, // 2
    filteredRepositories() {}, // 3
  },
  watch: {
    user: "getUserRepositories", // 1
  },
  methods: {
    // 1
    async getUserRepositories() {
      this.repositories = await fetchUserRepositories(this.user);
    },
    updateFilters() {}, // 3
  },
  mounted() {
    this.getUserRepositories(); // 1
  },
});
</script>
