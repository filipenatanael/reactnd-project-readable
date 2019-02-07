import React from 'react';
import PostsListContainner from '../containers/PostsList';

class Main extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <PostsListContainner match={match} />
    );
  }
}

export default Main
