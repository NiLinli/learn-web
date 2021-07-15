const path = require('path');

function resolvePath(path) {
  return path.resolve(__dirname, path);
}

module.exports = {
	entry: resolvePath('./src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};