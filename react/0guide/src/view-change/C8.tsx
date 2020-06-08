import * as React from 'react';

export class C8 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      a: 1,
      b: 2
    }
  }


  render() {
    console.log('C8 render');
    return (
      <div>
        <div>C8</div>
        <button onClick={()=> this.setState({a: 3})}>改变 C8 state</button>
      </div>

    );
  }
}