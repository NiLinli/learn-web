
const absolutePath = process.argv[1];

// 匹配文件名
// 回溯次数太过于多了
const regexp = /[^\/]*$/;

console.log(absolutePath.match(regexp));

function getPathAndFilename(string) {
  const regexp2 = /(.*)\/([^\/]*)$/;
  const result = regexp2.exec(string);

  let path, filename;

  if (result) {
    const $1 = result[1];
    const $2 = result[2];
    path = $1;
    filename = $2;
  } else {
    // 无法匹配
    path = './';
    filename = string;
  }

  return { path, filename }
}

console.log(getPathAndFilename(absolutePath));
console.log(getPathAndFilename('filename.js'));

