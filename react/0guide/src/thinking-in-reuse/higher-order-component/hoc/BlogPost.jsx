import React from 'react';
import withSubscription from './withSubscription';

class BlogPost extends React.Component {
  static sayHello() {
    console.log('hello BlogPost');
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <span>{this.props.data}</span>;
  }
}

export default withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id) // props 连接 withSubscription 和 被包裹的组件
);
