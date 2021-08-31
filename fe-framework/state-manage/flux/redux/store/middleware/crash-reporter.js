const crashReporter = (store) => (next) => (action) => {
  console.log('crashReporter');
  try {
    return next(action);
  } catch (err) {
    // send to sentry report
    console.error('Caught an exception!', err);
    throw err;
  }
};

module.exports = crashReporter;
