const arr = [
  {
    lang: 'c',
    style: 'strong type'
  },
  {
    lang: 'js',
    style: 'dynamic'
  }
];

const strArr = JSON.stringify(arr);

console.log('strArr = %s', strArr);