import * as React from 'react';
import { connect } from 'react-redux';
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../reducer/actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

interface IProps {
    selectedSubreddit: string;
    posts: any[];
    isFetching: boolean;
    lastUpdated: number;
    dispatch: any;
}

class AsyncApp extends React.Component<IProps> {
    constructor(props: any) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps: any) {
        // 更新了 selectedSubreddit , 需要重新请求数据
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedSubreddit));
        }
    }

    // Picker 传递出来的信息
    handleChange(nextSubreddit: string) {
        this.props.dispatch(selectSubreddit(nextSubreddit));
    }

    handleRefreshClick(e: any) {
        e.preventDefault();
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return (
            <div>
                <Picker value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']} />
                <p>
                    {lastUpdated &&
                        <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                            {' '}
                        </span>
                    }
                    {!isFetching &&
                        <a href='#'
                            onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    }
                </p>
                {isFetching && posts.length === 0 &&
                    <h2>Loading...</h2>
                }
                {!isFetching && posts.length === 0 &&
                    <h2>Empty.</h2>
                }
                {posts.length > 0 &&
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                }
            </div>
        )
    }
}

// connect 绑定
function mapStateToProps(state: any) {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: [],
        lastUpdated: false
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(AsyncApp);
