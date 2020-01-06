import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react'

import './App.css';

import { Provider } from 'react-redux';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import TestContainer from './containers/TestContainer';
import configureStore from './reducers/configureStore';

const  {store , persistor} = configureStore();


class App extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      isShowTest: true
    }
  }

  public render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />

            <div onClick={this.toggleTest}>toggle</div>

            { this.state.isShowTest && (<TestContainer /> )} 
          </div>
        </PersistGate>
      </Provider>
    );
  }

  private toggleTest = () => {
    this.setState((prevState:any)=>({isShowTest: !prevState.isShowTest}))
  }
}

export default App;




