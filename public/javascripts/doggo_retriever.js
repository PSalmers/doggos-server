const fs = require('fs');

exports.getDoggos = () => {
  let fileNames = fs.readdirSync('./public/images');
  return fileNames.filter(fileName => /\.jpg$/.test(fileName));
};