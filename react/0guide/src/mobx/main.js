import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import * as store from './store';

console.log(store)
import TimerView from './component/TimerView';

ReactDOM.render(
  <Provider {...store}>
    <TimerView />
  </Provider>,
  document.getElementById('root')
);
