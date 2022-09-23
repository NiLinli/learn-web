const expect = require('expect');

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;

    return {
      pass,
      message: () =>
        pass ? `expected ${received} not to be within range ${floor} - ${ceiling}` : `expected ${received} to be within range ${floor} - ${ceiling}`,
    };
  },
  async toBeWithinRangeAsync(received) {
    const floor = Promise.resolve(100);
    const ceiling = Promise.resolve(105);
    const pass = received >= (await floor) && received <= (await ceiling);

    return {
      pass,
      message: () =>
        pass ? `expected ${received} not to be within range ${floor} - ${ceiling}` : `expected ${received} to be within range ${floor} - ${ceiling}`,
    };
  },
});

try {
  expect(100).toBeWithinRange(90, 110);
  expect(100).toBeWithinRange(101, 110);
} catch (error) {
  console.log(error);
}

(async () => {
  try {
    await expect(101).toBeWithinRangeAsync();
  } catch (error) {
    console.log(error);
  }
})();
