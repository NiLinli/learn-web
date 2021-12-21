import { promiseSuccess, promiseFailed, name, can, can1, can2, some, houseForSale, num } from '../src/match';

describe('match property', () => {
  test('my name is not nilinlin', () => {
    expect(name).not.toBe('nilinlin');
  });

  test('promise resolves', () => {
    return expect(promiseSuccess).resolves.toBe('lemon');
  });

  test('promise reject', () => {
    return expect(promiseFailed).rejects.toBe('not your fault');
  });
});

// toBe 基本类型判断
describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});

// toHave... mock function 相关
// ...

// toHaveLength 判断对象的 length 属性的值
describe('the some length', () => {
  test('arr length test', () => {
    expect(some.arr).toHaveLength(3);
  });

  test('str length test', () => {
    expect(some.str).toHaveLength(3);
  });
});

// toHaveProperty(keyPath, value?)
// 判断是否具有是什么属性
// 判断是否具有什么属性 + 该属性值为提供值
test('this house has my desired features', () => {
  // Example Referencing
  expect(houseForSale).toHaveProperty('bath');
  expect(houseForSale).toHaveProperty('bedrooms', 4);

  expect(houseForSale).not.toHaveProperty('pool');

  // Deep referencing using dot notation
  expect(houseForSale).toHaveProperty('kitchen.area', 20);
  expect(houseForSale).toHaveProperty('kitchen.amenities', ['oven', 'stove', 'washer']);

  expect(houseForSale).not.toHaveProperty('kitchen.open');

  // Deep referencing using an array containing the keyPath
  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities'], ['oven', 'stove', 'washer']);
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

  // Referencing keys with dot in the key itself
  expect(houseForSale).toHaveProperty(['ceiling.height'], 2);
});

// toBeCloseTo(number, numDigits?)
// 判断数字相等
// numDigits 默认为 2    (10^-2)/2 = 0.005  Math.abs(expected - received) < 0.005
test('adding works sanely with decimals', () => {
  // expect(0.2 + 0.1).toBe(0.3);
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});

// toBeFalsy
// toBeNull
// toBeUndefined/toBeDefined
// toBeNaN
describe('test falsy value', () => {
  test('test falsy', () => {
    expect(0).toBeFalsy();
  });

  test('test null', () => {
    expect(null).toBeNull();
  });

  test('test undefined', () => {
    expect(undefined).toBeUndefined();
  });

  // 非 undefined, 可能 truthy , 可能 falsy
  test('test defined', () => {
    expect(false).toBeDefined();
  });

  test('test nan', () => {
    expect(NaN).toBeNaN();
  });
});

// toBeTruthy
describe('test truthy value', () => {
  test('test truthy', () => {
    expect('0').toBeTruthy();
  });
});

// toBeGreaterThan          >
// toBeGreaterThanOrEqual   >=
// toBeLessThan             <
// toBeLessThanOrEqual      <=
describe('compare number', () => {
  test('num is more than 10', () => {
    expect(num).toBeGreaterThan(10);
  });

  test('num is at least 12', () => {
    expect(num).toBeGreaterThanOrEqual(12);
  });

  test('num is less than 15', () => {
    expect(num).toBeLessThan(15);
  });

  test('num is at least 12', () => {
    expect(num).toBeLessThanOrEqual(12);
  });
});

// toContain
// toContainEqual

// toEqual
// 相对于 toBe
// 1. 支持递归遍历对象
// 2. 使用 Object.is() 代替 === 进行等于判断
test('test equal match', () => {
  expect(can1).toEqual(can2);
});

describe('match regexp', () => {
  expect('grapefruits').toMatch(/grapefruit/);
  expect('grapefruits').toMatch('fruit');

  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/white|yellow/),
    },
  };

  expect(houseForSale).toMatchObject(desiredHouse);
});


// toThrowError
// 