import { mount } from '@vue/test-utils';
import Foo from '../Foo.vue';
import localVue from './local.vue.js';

const transitionSub = () => ({
  render(h) {
    return this.$options._renderChildren;
  },
});

test('should render Foo, then hide it', async () => {
  const wrapper = mount(Foo, {
    localVue,
    stubs: {
      // 改写 transition 的默认行为
      transition: transitionSub(),
    },
  });
  expect(wrapper.text()).toMatch(/Foo/);

  await wrapper.setData({
    show: false,
  });

  // await wrapper.vm.$nextTick();

  expect(wrapper.text()).not.toMatch(/Foo/);
});
