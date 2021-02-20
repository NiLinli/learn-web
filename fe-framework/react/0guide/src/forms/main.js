import React from 'react';
import ReactDOM from 'react-dom';
// import FormValiadtion from './FormValiadtion';
import NameForm from './NameForm';
import UncontrolForm from './UncontrolForm';

function App(props) {
  return (
    <div>
      <h3>UncontrolForm</h3>
      <UncontrolForm></UncontrolForm>
      <h3>NameForm</h3>
      <NameForm></NameForm>
      {/* <h3>FormValiadtion</h3>
      <FormValiadtion></FormValiadtion> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));