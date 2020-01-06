import * as React from 'react';
import { withSubscription } from '../withSubscription';

// 改变之后
export class CommentList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.datas.map((comment) => (
          <span>{comment}</span>
        ))}
      </div>
    );
  }
}


// 高阶组件并不关心数据使用的方式和原因
const CommentListWithSubscription = withSubscription(
  CommentList,    // 而被包裹的组件也不关心数据来自何处
  (DataSource) => DataSource.getComments()
);