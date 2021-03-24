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
      v-bind:undefined-prop="123"
    />
    <h2>props 作为 data 的初始值</h2>
    <counter :initialCounter="1" />
    <h2>增强处理 attr class and style</h2>
    <enhance-attrs />
  </div>
</template>

<script>
import BlogPost from './blog-post';
import Counter from './counter';
import EnhanceAttrs from './enhance-attrs';

// v-bind
export default {
  components: {
    BlogPost,
    Counter,
    EnhanceAttrs
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
