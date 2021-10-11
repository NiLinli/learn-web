<template>
  <h3>vue2.0 独立的 attr 定义永远会覆盖 v-bind</h3>
  <h2>vue3.0 根据顺序覆盖 attr</h2>
  <div id="red" v-bind="{ id: 'blue' }">id: blue</div>
  <div v-bind="{ id: 'blue' }" id="red">id: red</div>
</template>