import { connect } from 'react-redux';
import Test from '../components/Test';
import { changeTest, logout } from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.test.name,
    age: state.test.age
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeName: (name) => {
      dispatch(changeTest('name', name))
    },
    onChangeAge: (age) => {
      dispatch(changeTest('age', age));
    },
    onResetState: () => {
      dispatch(logout());
    }
  }
};

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);

export default TestContainer;
