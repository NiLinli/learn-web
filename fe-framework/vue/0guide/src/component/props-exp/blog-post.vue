<template>
  <div class="post-title">
    <h3>{{ postTitle }}</h3>
    <p>likes: {{ likes }}</p>
    <p>isPublished: {{ isPublished }}</p>
    <p>comment-ids: {{ commentIds }}</p>
    <p>author: {{ JSON.stringify(author) }}</p>

    <!-- <p>undefinedProp: {{ undefinedProp }}</p> -->
  </div>
</template>

<script>
export default {

  // 未定义的 prop 不能访问
  // 1. 因为没有 proxy 到对应的 vm._props 上面
  // 2. vm._props 也没有该属性

  // 访问代理
  // vm.postTitle -> vm._props.postTitle -> vm.$options.propsData(实际传入的 prop 数据)
  // vm.$props(公开) 访问会代理到 vm._props(私有)

  // 未定义的 props, 被收集到 $attrs 中
  props: ['postTitle', 'likes', 'isPublished', 'commentIds', 'author', 'id2', 'title2'],
  created() {
    console.log(this)
    console.log(this.undefinedProp);
   
  },
};
</script>

<style></style>
