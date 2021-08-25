function printArgv() {
  process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
}

printArgv();

module.exports = printArgv;

// commander  处理 argv
