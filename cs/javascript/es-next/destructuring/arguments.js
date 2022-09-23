function setCookie(name, value, options) {
  options = options || {};

  const secure = typeof options.secure === 'undefined' ? false : options.secure,
    path = typeof options.path === 'undefined' ? '/blog' : options.path,
    domain = typeof options.domain === 'undefined' ? 'nilinli.com' : options.domain;

  console.log(`secure = ${secure}, path = ${path}, domain = ${domain}`);
}

// 替代
function setCookie2(name, value, { secure = false, path = '/blog', domain = 'nilinli.com' } = {}) {
  console.log(`secure = ${secure}, path = ${path}, domain = ${domain}`);
}

setCookie('type', 'js', {
  secure: true,
  domain: 'nixixi.com',
});

setCookie2('type', 'js', {
  secure: true,
  domain: 'nixixi.com',
});
