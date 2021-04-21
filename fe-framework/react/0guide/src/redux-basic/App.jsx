import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
// component
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import UserContainer from './containers/UserContainer';
import AsyncApp from './containers/AsyncApp';
// action
import { logout } from './store/actions/index';

import '../main.css';

const { store, persistor } = configureStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onResetState = () => {
    store.dispatch(logout());
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div>
            <div className="block">
              <button onClick={this.onResetState}>重置 State</button>
            </div>
            <div className="block">
              <h3>AddTodo</h3>
              <AddTodo />
              <h3>VisibleTodoList</h3>
              <VisibleTodoList />
              <Footer />
            </div>
            <div className="block">
              <UserContainer />
            </div>
            <div className="block">
              <AsyncApp />
            </div>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
