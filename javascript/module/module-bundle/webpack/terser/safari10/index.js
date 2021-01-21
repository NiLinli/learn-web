const { minify } = require('terser');
const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.resolve(__dirname, './foo.js'), {
  encoding: 'utf8',
});

(async function () {
  const result = await minify(code, {});
  fs.writeFileSync('foo_dist.js', result.code, 'utf8');

  // safari10
  const result10 = await minify(code, { safari10: true });
  fs.writeFileSync('foo_dist_10.js', result10.code, 'utf8');
})();
