<script>

import { h, resolveComponent } from 'vue';

export default {
  setup() {
    // app.component 注册的也需要 resolveComponent
    // 必须显示查找已注册组件
    const ButtonCounter = resolveComponent('button-counter');
    console.log(ButtonCounter)
    return () => h(ButtonCounter);
  }
}


</script>