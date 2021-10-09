import { ref, onMounted, watch, Ref } from "vue";
import fetchUserRepositories from "../fetchUserRepositories";


export default function useUserRepositories(user: Ref<string>) {
  const repositories = ref<Object[]>([]);

  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value);
  };

  onMounted(() => {
    getUserRepositories();
  });

  watch(user, getUserRepositories);

  return {
    repositories,
    getUserRepositories
  };
}