const mergeConfig = require('axios/lib/core/mergeConfig');
const defaults = require('axios/lib/defaults');

describe('core::mergeConfig', () => {
  it('should allow setting custom options', () => {
    const merged = mergeConfig(defaults, {
      loading: true,
      foo: 'bar',
    });

    expect(merged.loading).toEqual(true);
    expect(merged.foo).toEqual('bar');
  });
});
