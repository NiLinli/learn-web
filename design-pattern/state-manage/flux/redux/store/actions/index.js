const RESET_STATE = 'RESET_STATE';

const resetState = () => {
  return {
    type: RESET_STATE,
  };
};

module.exports = {
  resetState,
  RESET_STATE,
};
