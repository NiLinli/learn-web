const users = [{ name: 'Bob' }];
const resp = { data: users };

export default {
  get: jest.fn().mockResolvedValue(resp),
};
