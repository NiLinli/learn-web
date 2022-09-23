const { expect } = require('expect');

const favors = 'lemon, apple, pea';
// 匹配部分

expect(favors).toMatch(/apple/);

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
  },
};
const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

expect(houseForSale).toMatchObject(desiredHouse);
