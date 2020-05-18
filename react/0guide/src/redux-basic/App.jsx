import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'

import './App.css';

import { Provider } from 'react-redux';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import TestContainer from './containers/TestContainer';
import configureStore from './reducers/configureStore';

const { store, persistor } = configureStore();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowTest: true
    };
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div>
            <h3>AddTodo</h3>
            <AddTodo />
            <h3>VisibleTodoList</h3>
            <VisibleTodoList />
            <Footer />

            <div onClick={this.toggleTest}>toggle</div>

            {this.state.isShowTest && (<TestContainer />)}
          </div>
        </PersistGate>
      </Provider>
    );
  }

  toggleTest = () => {
    this.setState((prevState) => ({ isShowTest: !prevState.isShowTest }));
  }
}

export default App;




