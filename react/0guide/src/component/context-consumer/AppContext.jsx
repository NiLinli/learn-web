import React from 'react';

// 没有匹配上, 也就是没有通过 Provider 传入的时候, 才会显示这个默认值
const ThemeContext = React.createContext('light');
const OtherContext = React.createContext('other');

const DynamicContext = React.createContext({
  value: 123,
  action: () => {},
});

// 被 Provider 包裹的组件, 无论嵌套多深, 都可以访问到 ThemeContext 的 value
// 允许消费组件订阅 context 的变化, value 传递给消费组件
// 一个 Provider 可以和多个消费组件有对应关系

export default class AppContext extends React.Component {
  constructor(props) {
    super(props);
    this.updateDynamicState = (val) => {
      this.setState({
        dynamicState: {
          ...this.state.dynamicState,
          payload: val,
        },
      });
    };
    this.state = {
      dynamicState: {
        payload: 123,
        action: this.updateDynamicState,
      },
    };
  }

  render() {
    return (
      <DynamicContext.Provider value={this.state.dynamicState}>
        <ThemeContext.Provider value={'dark'}>
          <Toolbar />
        </ThemeContext.Provider>
      </DynamicContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <OtherContext.Provider value={'other1'}>
      <ThemedButton />
    </OtherContext.Provider>
  );
}

function ThemedButton(props) {
  return <Button />;
}

class Button extends React.Component {
  static contextType = ThemeContext; // 指定单个

  constructor(props) {
    super(props);
  }

  // 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染, 不受 shouldComponentUpdate 的限制
  render() {
    return (
      <div>
        <div>单个: {this.context}</div>
        <ThemeContext.Consumer>
          {(theme) => (
            <OtherContext.Consumer>
              {(other) => (
                <div>
                  多个: {theme} {other}
                </div>
              )}
            </OtherContext.Consumer>
          )}
        </ThemeContext.Consumer>
        <h5>动态</h5>
        <DynamicContext.Consumer>{({ payload, action }) => <button onClick={() => action(789)}>{payload}</button>}</DynamicContext.Consumer>
      </div>
    );
  }
}
