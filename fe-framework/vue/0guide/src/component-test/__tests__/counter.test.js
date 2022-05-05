import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Counter from '../Counter.vue';

describe('Counter', () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(Counter);

  test('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  test('has a button', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  test('button click should + the count', async () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find('button');

    // 改变状态等待视图刷新 await 
    await button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });

  test('will catch the error using async/await', async () => {
    await Vue.nextTick();
    expect(true).toBe(false);
  });
});
