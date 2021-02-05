module.exports = (src) => {
  console.log('-- uppercase loader running --');
  return src && src.toUpperCase();
};
