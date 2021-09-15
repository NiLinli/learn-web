const CHANGE_NAME = 'CHANGE_NAME';

const changeName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name
  };
};

module.exports = {
  CHANGE_NAME,
  changeName,
};
