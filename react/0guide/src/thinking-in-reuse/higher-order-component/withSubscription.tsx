
import * as React from 'react';
declare const DataSource: any;

// withSubscription HOC 是一个函数, 可以添加任意参数去配置
// 约束
// 1. 不要修改 WrappedComponent, 使用 compose
// 2. 传递不相关的 props 给 WrappedComponent

export function withSubscription(WrappedComponent, selectData) {

  // 返回一个新的 component
  return class extends React.Component<any, any> {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props) // callback 返回值
      };
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // 添加 data 属性
      // 未使用 props 传递到原组件中去
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}



