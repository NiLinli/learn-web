import React from 'react';
import withSubscription from './withSubscription';

// 改变之后
class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map((comment, index) => (
          <span key={index}>{comment}</span>
        ))}
      </div>
    );
  }
}

// 高阶组件并不关心数据使用的方式和原因
export default withSubscription(
  CommentList, // 而被包裹的组件也不关心数据来自何处
  (DataSource) => DataSource.getComments()
);
