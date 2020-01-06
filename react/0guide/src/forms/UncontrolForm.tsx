import * as React from 'react';

export class UncontrolForm extends React.Component {

  input: HTMLInputElement;

  constructor(props: any) {
    super(props);

  }

  handleSubmit = (e: any) => {
    console.log('A name was submitted: ' + this.input.value);
    e.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="form-control">
          <label>
            Name:
              <input 
                type="text"
                name="name"
                // value 会覆盖 DOM 中的值, 使用 defaultValue 代替 value
                defaultValue="nixixi"
                ref={(input: HTMLInputElement) => this.input = input} />
          </label>
        </div>
        <button type="submit"> Submit</button>
      </form>
    );
  }


}

// 使用 DOM 维护自身的状态, 不受 React 控制
// 同时集成 React 和非 React 代码
// input[type='file'] 始终是非受控组件
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/