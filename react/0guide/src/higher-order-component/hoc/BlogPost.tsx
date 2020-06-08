import * as React from 'react';
import { withSubscription } from '../withSubscription';

export class BlogPost extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    return (<span>{this.props.blogPost}</span>)
  }
}


const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)   // props 连接 withSubscription 和 被包裹的组件
);
