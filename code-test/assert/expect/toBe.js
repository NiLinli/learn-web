const { expect } = require('expect');

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

// Object.is
expect(can.ounces).toBe(12);
expect(can.name).toBe('pamplemousse');

// Math.abs(expected - received) < 0.005 10^-numDigits/2
expect(0.1 + 0.2).toBeCloseTo(0.3, 2);
