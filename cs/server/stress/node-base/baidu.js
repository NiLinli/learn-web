const autocannon = require('autocannon');

async function testBaidu() {
  const result = await autocannon({
    url: 'https://www.baidu.com',
    connections: 400,
    pipelining: 1,
    duration: 30,
    workers: 12,
  });
  console.log(result);
}

testBaidu();
