const { expect } = require('expect');

(async () => {
  expect(123).not.toBe(456);
  await expect(Promise.resolve(123)).resolves.toBe(123);
  await expect(Promise.reject(456)).rejects.toBe(456);
})();

// 修饰符对象下面会挂载所有的 matcher
// 修饰符的组合方式如下
// expectation[name] = makeThrowingMatcher(matcher, false, '', actual);
// expectation.not[name] = makeThrowingMatcher(matcher, true, '', actual);
// expectation.resolves[name] = makeResolveMatcher(name, promiseMatcher, false, actual, err);
// expectation.resolves.not[name] = makeResolveMatcher(name, promiseMatcher, true, actual, err);
// expectation.rejects[name] = makeRejectMatcher(name, promiseMatcher, false, actual, err);
// expectation.rejects.not[name] = makeRejectMatcher(name, promiseMatcher, true, actual, err);
