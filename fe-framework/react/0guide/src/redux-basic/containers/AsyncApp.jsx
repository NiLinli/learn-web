import * as React from 'react';
import { connect } from 'react-redux';
import { selectSubreddit } from '../store/actions/selected';
import { fetchPostsIfNeeded } from '../store/actions/posts';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class AsyncApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { selectedSubreddit, fetchPostsIfNeeded } = this.props;
    fetchPostsIfNeeded(selectedSubreddit);
  }

  componentWillReceiveProps(nextProps) {
    // 更新了 selectedSubreddit , 需要重新请求数据
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { selectedSubreddit } = nextProps;
      fetchPostsIfNeeded(selectedSubreddit);
    }
  }

  // Picker 传递出来的信息
  handleChange = (nextSubreddit) => {
    const { selectSubreddit } = this.props;
    selectSubreddit(nextSubreddit);
  };

  handleRefreshClick = (e) => {
    e.preventDefault();
    const { selectedSubreddit } = this.props;
    fetchPostsIfNeeded(selectedSubreddit);
  };

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker value={selectedSubreddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}. </span>}
          {!isFetching && (
            <a href="#" onClick={this.handleRefreshClick}>
              Refresh
            </a>
          )}
        </p>
        {isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    );
  }
}

// connect 绑定
function mapStateToProps(state, ownProps) {
  const { selectedSubreddit, postsBySubreddit } = state;

  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: [],
    lastUpdated: false,
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchPostsIfNeeded: (selectedSubreddit) => dispatch(fetchPostsIfNeeded(selectedSubreddit)),
    selectSubreddit: (nextSubreddit) => dispatch(selectSubreddit(nextSubreddit)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);
