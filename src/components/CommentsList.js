import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Comment from './Comment';

class CommentsList extends Component {
  componentWillMount() {
    const { fetchPostComments, postId } = this.props;
    fetchPostComments(postId);
  }

  onDeleted = (commentId) => {
    const {
      postId,
      deleteCommentPost,
      fetchPostComments,
    } = this.props;

    deleteCommentPost(commentId, () => {
      fetchPostComments(postId);
    });
  }

  render() {
    const { classes, postCategory, comments, voteForComment } = this.props
    return _.map(comments, (comment, id) => {
      return (
        <Grid key={id} item xs={12}>
          <Card className={classes.card}>
            <List>
              <Comment
                comment={comment}
                postCategory={postCategory}
                onDeleted={this.onDeleted}
                onVote={voteForComment}
              />
            </List>
          </Card>
        </Grid>)
    })
  }
}

const styles = theme => ({
  card: {
    maxWidth: '100%',
    backgroundColor: '#eeeeee'
  },
});

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentsList);
