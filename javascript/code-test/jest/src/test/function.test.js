// 只能 mock module, 不能 mock 模块中的一部分
// jest.mock('../src/function');

const { forEach, foo } = require('../function');
const mockCallback = jest.fn((x) => 42 + x);

forEach([0, 1], mockCallback);

// .mock 记录函数调用的信息
test("mockCallback's mock property", () => {
  // 调用次数
  expect(mockCallback.mock.calls.length).toBe(2);

  const n = 0;
  const m = 0;

  // 查看第 m 次调用的 第 n 个参数 从 0 开始计数
  expect(mockCallback.mock.calls[n][m]).toBe(0);

  // 查看 m 次调用的结果
  expect(mockCallback.mock.results[m].value).toBe(42);
});

// 返回值
test('mock return values', () => {
  const filterTestFn = jest.fn();

  filterTestFn.mockReturnValueOnce(false).mockReturnValue(true);

  const result = [11, 12].filter((num) => filterTestFn(num));

  console.log(result);
});

// 具体实现
test('implememt function', () => {
  // mock function 可以指定一个具体的实现
  // 这个实现可以修改
  const myMockFn = jest.fn((cb) => cb(null, true));

  myMockFn((err, val) => console.log(val));

  myMockFn
    .mockImplementationOnce((x) => 40 + x)
    .mockImplementationOnce((x) => 41 + x)
    .mockImplementation((x) => 42 + x);

  expect(myMockFn(2)).toBe(42);
  expect(myMockFn(2)).toBe(43);
  expect(myMockFn(2)).toBe(44);

  // 已有函数的具体实现也可以修改为 mock function, 首先得 mock module
  // foo
  //   .mockImplementationOnce((x) => 40 + x)
  //   .mockImplementationOnce((x) => 41 + x)
  //   .mockImplementation((x) => 42 + x);

  // expect(foo(2)).toBe(42);
  // expect(foo(2)).toBe(43);
  // expect(foo(2)).toBe(44);
});

// 函数名
