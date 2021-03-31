<template>
  <div>
    <render-functional :level="4">Heading4</render-functional>
    <template-functional :level="5">Heading5</template-functional>

    <functional-button :a="1" :b="2" :c="3" @foo="console.log('foo')"></functional-button>
  </div>
</template>

<script>
import RenderFunctional from './render-functional';
import TemplateFunctional from './template-functional';
import FunctionalButton from './functional-button'

export default {
  functionnal: true,
  components: {
    RenderFunctional,
    TemplateFunctional,
    FunctionalButton
  },
};
</script>

<style></style>
