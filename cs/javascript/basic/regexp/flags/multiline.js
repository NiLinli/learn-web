// multiline 会把字符串当作多行看待(识别换行符)
// ^ $ 可以处理多行

const regexp = /^foo/g;
const regexpm = /^foo/gm;

function foo(regexp) {
  const str = 'foo hahaha next line \nfoo';
  let array;

  while ((array = regexp.exec(str)) !== null) {
    console.log(`Found '${array[0]}' in position ${array.index}`);
  }
}

foo(regexp, '---');
foo(regexpm);
