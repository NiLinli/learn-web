import { shallowMount } from '@vue/test-utils';
import Button from '../Button.vue';
import axios from 'axios';
import flushPromises from 'flush-promises';

jest.mock('axios', () => ({
  get: Promise.resolve('value'),
}));

describe('Button test', () => {
  test('fetches async when a button is clicked', async () => {
    // 渲染该组件 不渲染子组件
    const wrapper = shallowMount(Button);

    wrapper.find('button').trigger('click');

    await flushPromises();
    expect(wrapper.text()).toBe('value');

    // wrapper.vm.$nextTick(() => {
    //   expect(wrapper.text()).toBe('value');
    //   done();
    // });
  });
});
