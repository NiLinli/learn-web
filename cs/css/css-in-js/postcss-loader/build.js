const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const pxtorem = require('postcss-pxtorem');

function resolve(p) {
  return path.resolve(__dirname, p);
}

const options = {
  replace: false,
};

const css = fs.readFileSync(resolve('./src/index.css'), 'utf8');
const processedCss = postcss(pxtorem(options)).process(css).css;

fs.writeFile(resolve('./dist/index-rem.css'), processedCss, (err) => {
  if (err) {
    throw err;
  }
  console.log('Rem file written.');
});
