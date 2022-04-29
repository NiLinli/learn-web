module.exports = (api) => {
  if (api.env('test')) {
    return {
      presets: [['@vue/app', { modules: 'commonjs', targets: { node: 'current' } }]],
    };
  } else {
    return {
      presets: ['@vue/app'],
    };
  }
};
