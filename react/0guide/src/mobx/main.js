import React from 'react';
import ReactDOM from 'react-dom';
import TimerView from './component/TimerView';
import { timerStore } from './store';

ReactDOM.render(<TimerView state={timerStore} />, document.getElementById('root'));