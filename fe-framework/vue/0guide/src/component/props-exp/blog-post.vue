<template>
  <div class="post-title">
    <h3>{{ postTitle }}</h3>
    <p>likes: {{ likes }}</p>
    <p>isPublished: {{ isPublished }}</p>
    <p>comment-ids: {{ commentIds }}</p>
    <p>author: {{ JSON.stringify(author) }}</p>

    <p>id2: {{ id2 }}</p>
    <p>title2: {{ title2 }}</p>
  </div>
</template>

<script>
export default {
  props: ['postTitle', 'likes', 'isPublished', 'commentIds', 'author', 'id2', 'title2'],
  created() {
    console.log(this);
  },
};
</script>

<style></style>
