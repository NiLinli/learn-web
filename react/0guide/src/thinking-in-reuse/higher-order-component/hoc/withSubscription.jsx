import React from 'react';

// withSubscription HOC 是一个函数, 可以添加任意参数去配置
// 约束
// 1. 不要修改 WrappedComponent, 使用 compose
// 2. 传递不相关的 props 给 WrappedComponent

export default function withSubscription(WrappedComponent, selectData) {
  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  // 返回一个新的 component
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props) || [], // callback 返回值
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
      return <WrappedComponent ref={forwardedRef} data={this.state.data} {...passThroughProps} />;
    }
  }

  // 命名
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  // 拷贝静态方法(非react 自带的)
  // hoistNonReactStatic(withSubscription, WrappedComponent);

  // return WithSubscription;
  // 考虑 ref 转发
  return React.forwardRef((props, ref) => {
    return <WithSubscription {...props} forwardedRef={ref} />;
  });
}
