import axios from 'axios';
import Users from '../users';

// mock 整个模块, 整个模块都被模拟
jest.mock('axios');

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  // const resp = { data: users };
  // axios.get => jest.fn

  // 可以在测试用例中实现
  // 也可以在 __mocks__ 中实现
  // axios.get.mockResolvedValue(resp);
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual([{ name: 'Bob' }]));
});

test('should fetch users 2', async () => {
  const data = await Users.all();
  expect(data).toEqual([{ name: 'Bob' }]);
});
