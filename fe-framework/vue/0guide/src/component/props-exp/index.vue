<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="静态 props" lazy>
        <blog-post post-title="静态 props 的 title" />
      </el-tab-pane>
      <el-tab-pane label="动态 props" lazy>
        <blog-post
          v-bind:post-title="post.title + ' by ' + post.author.name"
          v-bind:likes="42"
          v-bind:is-published="true"
          v-bind:comment-ids="[234, 266, 273]"
          v-bind:author="{ name: 'Veronica', company: 'Veridian Dynamics' }"
          v-bind:undefined-prop="123"
        />
      </el-tab-pane>
      <el-tab-pane label="props 作为 data 的初始值" lazy>
        <counter :initialCounter="1" />
      </el-tab-pane>
      <el-tab-pane label="增强处理 attr class and style" lazy>
        <enhance-attrs />
      </el-tab-pane>
      <el-tab-pane label="$attrs" lazy>
        <female-duck style="background-color: red;" :age="2" :weight="18" />
      </el-tab-pane>
      <el-tab-pane label="DOM property" lazy>
        <div :text-content.prop="'omg dom property'"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BlogPost from './blog-post';
import Counter from './counter';
import EnhanceAttrs from './enhance-attrs';
import FemaleDuck from './female-duck';

// v-bind
export default {
  components: {
    BlogPost,
    Counter,
    EnhanceAttrs,
    FemaleDuck
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
