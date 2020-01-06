import * as React from 'react';

const ThemeContext = React.createContext('light');

export class Demo01 extends React.Component {
  render() {
    return (
      // 被 Provider 包裹的组件, 无论嵌套多深, 都可以访问到 ThemeContext 的 value
      // 允许消费组件订阅 context 的变化, value 传递给消费组件
      // 一个 Provider 可以和多个消费组件有对应关系
      // 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据
      // 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染, 不受 shouldComponentUpdate 的限制
      <ThemeContext.Provider value={'dark'}>
        <Toolbar/>
      </ThemeContext.Provider>
    );
  }
}

const OtherContext = React.createContext('other');
function Toolbar(props) {
  return (
    <OtherContext.Provider value={'other'}>
      <ThemedButton />
    </OtherContext.Provider>
  );
}

class ThemedButton extends React.Component<any, any>{
  render() {
    return <Button />;
  }
}

class Button extends React.Component<any, any> {

  static contextType = ThemeContext;

  context: string;

  constructor(props){
    super(props);
  }

  render() {
    return (<button>demo01 - { this.context }</button>)
  }

}