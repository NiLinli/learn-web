
<script lang="ts" setup>
import { toRefs, defineProps } from "vue";
import {
  useUserRepositories,
  useRepositoryNameSearch,
} from "./composables/index";

// 运行时检查类型
// const props = defineProps({
//   user: String,
// });

// 引入 ts 后, 静态类型检查
// 静态分析会推断除运行时声明, 不需要再写运行时声明
const props = defineProps<{
  user: string
}>();

const { user } = toRefs(props);

// 定成定义的变量会返回
const { repositories, getUserRepositories } = useUserRepositories(user);

const { searchQuery, repositoriesMatchingSearchQuery } =
  useRepositoryNameSearch(repositories);

// 组件 import 进来会自动注册
// ...一些列语法糖
</script>
