import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostContainer from '../containers/Post';
import NotFound from './shared/NotFound';
import CommentsListContainer from '../containers/CommentsList';

class PostDetail extends Component {
  state = {
    commentCount: 0
  }

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id, () => false);
    this.updatePostCommentsCount()
  }

  updatePostCommentsCount = () => {
    const { id } = this.props.match.params;
    this.props.fetchCommentsCount(id, (data) => {
      this.setState({ commentCount: data.amount });
    });
  }

  render(){
    const { classes, post, deletePost, match: { params: { category } } } = this.props

    return(
      (!post || post.category !== category)
      ? <NotFound />
      : <div className={classes.root}>
          <Grid container spacing={24}>

            <Grid item xs={12}>
              <Grid item xs={12}>
                <PostContainer
                  key={post.id}
                  post={post}
                  commentCount={this.state.commentCount}
                  onDeletePost={deletePost}
                />
              </Grid>
            </Grid>

            <br />
            <CommentsListContainer
              postCategory={post.category}
              postId={post.id}
              updatePostCommentsCount={this.updatePostCommentsCount}
            />

        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    marginTop: 50,
    flexGrow: 1,
  },
  card: {
    maxWidth: '100%',
    backgroundColor: '#eeeeee'
  },
});

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostDetail);
