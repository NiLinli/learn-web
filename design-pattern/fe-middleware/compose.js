const { a, b, c, aa, ab, ac, end } = require('./middleware');

function compose(...funcs) {
  let handle;

  for (let i = funcs.length - 1; i >= 0; i--) {
    const func = funcs[i];
    if (!handle) {
      handle = () => func(ctx, () => ctx);
    } else {
      handle = (ctx) => func(ctx, handle);
    }
  }

  return handle;
}

const handle = compose(a, b, c, end);

handle({});

// const handleAsyc = compose(aa, ab, ac, end);
