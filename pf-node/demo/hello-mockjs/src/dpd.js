// 数据占位符定义规范 Data Placeholder Definition - DPD
const Mock = require('mockjs');

const Random = Mock.Random;

console.log(Random.email());
console.log(Random.first());

Random.extend({
  constellation: function (date) {
    var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
    return this.pick(constellations);
  },
});

const data = Mock.mock({
  name: {
    // 占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中
    // 引用 Mock.Random 中的方法
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    // 优先引用占位符中的属性
    full: '@first @middle @last',
  },
  basic: {
    boolean: '@boolean',
    natural: '@natural',
    integer: '@integer',
    float: '@float',
    character: '@character',
    string: '@string',
    range: '@range',
    date: '@date',
    time: '@time',
    now: '@now',
  },
  image: {
    image: '@image',
    // dataImage: '@dataImage'
  },
  color: '@color',
  text: {
    paragraph: '@paragraph',
    sentence: '@sentence',
    word: '@word',
    title: '@title',
    cparagraph: '@cparagraph',
    csentence: '@csentence',
    cword: '@cword',
    ctitle: '@ctitle',
  },
  name: {
    first: '@first',
    last: '@last',
    name: '@name',
    cfirst: '@cfirst',
    clast: '@clast',
    cname: '@cname',
  },
  web: {
    url: '@url',
    domain: '@domain',
    email: '@email',
    ip: '@ip',
    tld: '@tld',
  },
  address: {
    area: '@area',
    region: '@region',
  },
  helper: {
    capitalize: '@capitalize',
    upper: '@upper',
    lower: '@lower',
    pick: '@pick',
    shuffle: '@shuffle',
  },
  miscellaneous: {
    guid: '@guid',
    id: '@id',
  },
  extend: '@constellation'
});

console.log(JSON.stringify(data, null, 4));
