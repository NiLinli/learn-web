function someAsyncOpiton(content) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, 5000);
  });
}

// console.log('-- async-loader load --');
// module.exports = async function (content, map, meta) {
//   console.log('-- async-loader running --');

//   this.async(null, await someAsyncOpiton(content), map, meta);
// };

console.log('-- async-loader load --');
module.exports = async function (content, map, meta) {
  console.log('-- async-loader running --');
  this.callback = this.async();

  // someAsyncOpiton(content)
  //   .then((data) => {
  //     console.log(data)
  //     this.callback(null, data, map, meta)
  //   })
  this.callback(null, await someAsyncOpiton(content), map, meta);
};
