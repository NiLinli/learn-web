const path = require('path');
const fs = require('fs');


function getEntrys() {
  const file = path.resolve(__dirname, './src');
  try {
    const data = fs.readdirSync(file);

    let entrys = {};
    data.forEach(folderName => {
      entrys[folderName] = `${file}/${folderName}/index.js`;
    });

    return entrys;


  } catch (error) { }
}

module.exports = {
  mode: 'development',
  // devtool: '',
  entry: getEntrys(),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
};