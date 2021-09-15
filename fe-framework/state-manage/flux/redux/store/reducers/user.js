const { CHANGE_NAME } = require('../actions/user');
const { RESET_STATE } = require('../actions/index');

const getInitState = () => Object.freeze({
  name: '',
  age: 18,
});

const user = (state = getInitState(), { type, payload }) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: payload,
      };
    case RESET_STATE:
      return getInitState();
    default:
      return state;
  }
};

module.exports = user;
