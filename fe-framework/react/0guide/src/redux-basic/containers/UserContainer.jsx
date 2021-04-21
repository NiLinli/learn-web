import { connect } from 'react-redux';
import User from '../components/User';
import { changeUser } from '../store/actions/user';

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.name,
    age: state.user.age,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeName: (name) => {
      dispatch(changeUser('name', name));
    },
    onChangeAge: (age) => {
      dispatch(changeUser('age', age));
    },
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
