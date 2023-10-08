// module selectors

const { createSelector } = require('reselect');

// 取值的 select 不需要 memo
const userNameSelector = (state) => {
  console.log('computed user name');
  return state.user.name;
};

// computed 出来的衍生值需要 memo
const upperCaseUseNameSelector = createSelector(
  // input-selectors
  userNameSelector,
  // transform function
  (userName) =>  typeof userName ==='string' && userName.toUpperCase()
);

module.exports = {
  userNameSelector,
  upperCaseUseNameSelector
};
