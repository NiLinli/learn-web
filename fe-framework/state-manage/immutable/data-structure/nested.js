const { fromJS } = require('immutable');

const nested = fromJS({
  a: {
    b: {
      c: [3, 4, 5],
    },
  },
});

const nested2 = nested.mergeDeep({
  a: {
    b: {
      d: 6,
    },
  },
});

console.log(nested.getIn(['a', 'b', 'd']));

const nested3 = nested2.updateIn(['a', 'b', 'd'], (val) => val + 9);
const nested4 = nested3.updateIn(['a', 'b', 'e'], () => 9);

console.log(nested4.toJS());
