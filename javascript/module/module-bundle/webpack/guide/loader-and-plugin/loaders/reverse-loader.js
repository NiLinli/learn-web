console.log('-- reverse loader load --');
module.exports = (src) => {
  console.log('-- reverse loader running --');
  
  return src && src.split('').reverse().join('');
}