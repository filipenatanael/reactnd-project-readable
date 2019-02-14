import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostContainer from '../containers/Post';
import NotFound from './shared/NotFound';
import CommentsListContainer from '../containers/CommentsList';
import NewComment from './NewComment';

class PostDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id, () => false);
  }

  onCreateComment = (comment, author) => {
    const { category, id } = this.props.match.params
    this.props.createComment(comment, author, id, () => {
      this.props.history.push(`/${category}/${id}`);
    });
  }

  render(){
    const { classes, post, deletePost, match: { params: { category } } } = this.props;

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
                  onDeletePost={deletePost}
                />
              </Grid>
            </Grid>

            <NewComment
              onCreateComment={this.onCreateComment}
            />

            <br />
            <CommentsListContainer
              postCategory={post.category}
              postId={post.id}
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
