<template>
  <div>
    <h2>静态 props</h2>
    <blog-post post-title="静态 props 的 title" />

    <h2>动态 props</h2>
    <blog-post
      v-bind:post-title="post.title + ' by ' + post.author.name"
      v-bind:likes="42"
      v-bind:is-published="true"
      v-bind:comment-ids="[234, 266, 273]"
      v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"
    />
    <counter />
  </div>
</template>

<script>
import BlogPost from './blog-post';
import Counter from './counter';

// v-bind
export default {
  components: {
    BlogPost,
    Counter,
  },
  data() {
    return {
      post: {
        title: '标题党',
        author: {
          name: 'nilinli',
        },
      },
      post2: {
        id2: 1,
        title2: 'My Journey with Vue',
      },
    };
  },
};
</script>

<style></style>
