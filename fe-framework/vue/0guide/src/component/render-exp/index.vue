<template>
  <div>
    <h3>组件 render 和 template 的区别</h3>
    <r-anchored-heading :level="2">Heading2</r-anchored-heading>
    <t-anchored-heading :level="3">Heading3</t-anchored-heading>
    <render-functional :level="4">Heading4</render-functional>
    <template-functional :level="5">Heading5</template-functional>
  </div>
</template>

<script>
import RAnchoredHeading from "./render-anchored-heading";
import TAnchoredHeading from "./template-anchored-heading";
import RenderFunctional from './render-functional';
import TemplateFunctional from './template-functional';

export default {
  components: {
    RAnchoredHeading,
    TAnchoredHeading,
    RenderFunctional,
    TemplateFunctional
  }
};
</script>

<style>
</style>