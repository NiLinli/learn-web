import React from 'react';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: 'coconut',
      isGoing: true,
      name: 'nixixi',
    };
  }

  // 1. 添加状态改变 对应的 handle
  handleInputChange = (event) => {
    // 2. 对数据进行处理
    //  表单验证
    //  数据过滤
    //  ...
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // 3. HTML Form 状态更新到 React Component 状态 -->
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    console.log('A name was submitted: ', this.state);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label>
            Is going:
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="form-control">
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
        </div>
        <div className="form-control">
          <select name="fruit" value={this.state.fruit} onChange={this.handleInputChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <button type="submit"> Submit</button>
        <div onClick={this.changeName}>改变 Name</div>
      </form>
    );
  }

  changeName = () => {
    this.setState({
      name: '你嘻嘻',
    });
  };
}

// HTML 表单元素: 会维持自身状态, 并根据用户输入进行更新
// 处理提交表单并可访问用户输入表单数据的函数
// react 表单元素: 状态在 state 中, 并只能用 setState() 方法进行更新

// react 结合二者 (同步 HTML 和 React 元素)
// 1. React负责渲染表单的组件仍然控制用户后续输入时所发生的变化 (每个状态的改变都有一个与之相关的处理函数)
// 2. 其值由 React 控制的输入表单元素称为 “受控组件”

// 表单的显示的值, 由 state 渲染
// 由于视图更新的很及时, 不会存在 state 和表单内部 state 不一致的情况
