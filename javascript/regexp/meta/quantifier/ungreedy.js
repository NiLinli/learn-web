const html = `
  <foo><bar>new</bar></foo>
`;

// * 默认会匹配满足条件最多的
// .* => foo><bar>new</bar></foo
console.log(html.match(/<.*>/));

// 量词添加 ? 后变成非贪婪模式
// 满足条件状态下匹配最少的
// .*? => foo
console.log(html.match(/<.*?>/));
