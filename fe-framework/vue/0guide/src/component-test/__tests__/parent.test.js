import { mount } from '@vue/test-utils';
import ParentComponent from '../ParentComponent';
import ChildComponent from '../ChildComponent';

describe('ParentComponent', () => {
  const wrapper = mount(ParentComponent);
  const child = wrapper.findComponent(ChildComponent);

  test("displays 'Emitted!' when custom event is emitted", async () => {
    await child.vm.$emit('custom');
    expect(wrapper.html()).toContain('Emitted!');
  });

  // 避免 setData & setProps
  // mount 时候可以指定 data & props
  test('manipulates state', async () => {
    // 只能顶层 组件设置使用 setProps
    await wrapper.setProps({ foo: 'foo' });
    expect(wrapper.html()).toContain('foo');

    await child.setData({ bar: 'bar' });
    expect(child.html()).toContain('bar');
  });
});
