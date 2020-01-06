import { connect } from 'react-redux';
import Test from '../components/Test';
import { changeTest, logout } from '../actions/actions';


const mapStateToProps = (state: any, ownProps: any) => {
    return {
        name: state.test.name,
        age: state.test.age
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
      onChangeName: (name:any) => {
          dispatch(changeTest('name', name))
      },
      onChangeAge: (age: any) => {
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
