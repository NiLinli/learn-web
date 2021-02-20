import * as  React from 'react';

interface IProps {
    posts: any[];
}

export default class Posts extends React.Component<IProps> {
    render() {
        return (
            <ul>
                {this.props.posts.map((post, i) =>
                    <li key={i}>{post.title}</li>
                )}
            </ul>
        )
    }
}
