import defaultExport, { bar, foo } from '../foo-bar-baz';

jest.mock('../foo-bar-baz', () => {
  return {
    __esModule: true,
    ...jest.requireActual('../foo-bar-baz'),
    // 部分 mock, 模块的其他部分可以维持当前实现
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {
  expect(defaultExport()).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();
  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
