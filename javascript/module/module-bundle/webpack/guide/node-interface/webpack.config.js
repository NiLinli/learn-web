const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/main.js'),
	profile: true,
	devtool: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
