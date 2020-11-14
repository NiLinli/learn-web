process.on('message', (m) => {
  console.log(`Child got messge: ${JSON.stringify(m)}`);
});

process.send({
  hello: 'parent',
});
