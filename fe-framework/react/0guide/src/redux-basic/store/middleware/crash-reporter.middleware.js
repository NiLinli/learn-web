export const crashReporter = (store) => (next) => (action) => {

  console.log('crashReporter');
  
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    //  做一些报告
    throw err;
  }
};
