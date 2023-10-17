import React from 'react';

// HOC 是一个函数, 可以添加任意参数去配置(自定义逻辑)
// 约束
// 1. 不要修改 WrappedComponent, 使用 compose
// 2. 组合 state + 原有 props = props 传入 WrappedComponent

export default function withSubscription(WrappedComponent, selectData) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  // 返回一个新的 component
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props) || [],
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
        data: selectData(DataSource, this.props),
      });
    };

    render() {
      // 添加 data 属性
      // 过滤掉不相关的 extraProp
      // 未使用 passThroughProps 传递到原组件中去
      const { extraProp, forwardedRef, ...passThroughProps } = this.props;
      return <WrappedComponent 
        ref={forwardedRef}
        // 复用逻辑
        data={this.state.data}
        // 原有逻辑
        {...passThroughProps} 
      />;
    }
  }

  // 命名
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  // 拷贝静态方法(非react 自带的)
  // hoistNonReactStatic(withSubscription, WrappedComponent);

  // 考虑 ref 转发
  return React.forwardRef((props, ref) => {
    return <WithSubscription {...props} forwardedRef={ref} />;
  });
}
