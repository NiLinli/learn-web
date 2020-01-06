import { URL, URLSearchParams } from 'url';

var a = new URL("/", "https://developer.mozilla.org"); // Creates a URL pointing to 'https://developer.mozilla.org/'
var b = new URL("https://developer.mozilla.org/nilinli/");      // Creates a URL pointing to 'https://developer.mozilla.org'
var c = new URL('en-US/docs', b);                      // 相对路径 'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var f = new URL('/en-US/docs', d);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var g = new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
// Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
var h = new URL('/en-US/docs', a);                     // Creates a URL pointing to 'https://developer.mozilla.org/en-US/docs'
// var i = new URL('/en-US/docs', '');                    // Raises a SYNTAX ERROR exception as '/en-US/docs' is not valid
// var j = new URL('/en-US/docs');                        // Raises a SYNTAX ERROR exception as 'about:blank/en-US/docs' is not valid
var k = new URL('http://www.example.com', 'https://developers.mozilla.com');
// Creates a URL pointing to 'https://www.example.com'
var l = new URL('http://www.example.com', b);          // Creates a URL pointing to 'https://www.example.com'

console.log(`
  a.href = ${a.href}
  b.href = ${b.href}
  c.href = ${c.href}
  d.href = ${d.href}
  f.href = ${f.href}
  g.href = ${g.href}
  h.href = ${h.href}
  k.href = ${k.href}
  l.href = ${l.href}
`);

// 绝对路径 + 相对路径的时候
// 判断是否有 / 
// 1. /abc/ = /abc/
// 2. /abc  = /

const url = new URL('/resume/2018?career=nodejs&career=webfront&location=wuhan', 'https://www.nilinli.com');
console.log(url);
console.log(url.searchParams);

