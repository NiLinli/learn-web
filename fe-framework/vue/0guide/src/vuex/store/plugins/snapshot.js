import _ from 'lodash';

export default store => {
  let prevState = _.cloneDeep(store.state);

  store.subscribe((mutation, state) => {
    let nextState = _.cloneDeep(state);
    console.log(mutation)
    console.log('prevState = ' , prevState, 'nextState = ' , nextState);
    prevState = nextState;
  });
}