import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import BorderColor from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import Badge from '@material-ui/core/Badge';
import Star from '@material-ui/icons/Star';

import { timestampToDate } from '../helpers/timestampToDate';
import { getFisrtChar } from '../helpers/strings';

import EditComment from './EditComment';

const EDIT_COMMENT = 'EDIT_COMMENT';
const SHOW_COMMENT = 'SHOW_COMMENT';

class Comment extends Component {
  state = {
    scene: SHOW_COMMENT
  }

  toggleScene = (scene) => {
    this.setState({
      scene: scene
    });
  }

  onEditComment = (updatedComment) => {
    const { postId, comment, editComment, fetchComments } = this.props
    const _AUTHOR = 'anonymous';
    const values = {
      body: updatedComment,
      author: _AUTHOR
    }
    editComment(comment.id, values, () => {
      fetchComments(postId);
      this.setState({
        scene: SHOW_COMMENT
      });
    });
  }

  renderComment() {
    const { classes, comment, voteForComment, onDeleted } = this.props;

    if (this.state.scene === SHOW_COMMENT) {
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar className={classes.avatar}>{getFisrtChar(comment.author)}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={comment.author}
            secondary={
              <React.Fragment>
                <Typography component="span" className={classes.inline} color="textPrimary">
                  {timestampToDate(comment.timestamp)}
                </Typography>
                {` — ${comment.body}`}
              </React.Fragment>
            }
          />
          <CardActions className={classes.actions} disableActionSpacing>

            <IconButton aria-label="Vote Score">
              <Badge badgeContent={comment.voteScore ? comment.voteScore : 0} color="primary" classes={{ badge: classes.badge }}>
                <Star />
              </Badge>
            </IconButton>

            <IconButton aria-label="Up Vote" onClick={() => voteForComment(comment.id, 'upVote')}>
              <ThumbUpAlt />
            </IconButton>

            <IconButton aria-label="Down Vote" onClick={() => voteForComment(comment.id, 'downVote')}>
              <ThumbDownAlt />
            </IconButton>

            {/*<Link to={`/${postCategory}/${comment.parentId}/comments/edit/${comment.id}`}>*/}
              <IconButton aria-label="Edit Comment" onClick={() => this.toggleScene(EDIT_COMMENT)}>
                <Grid item xs={8}>
                  <BorderColor />
                </Grid>
              </IconButton>
            {/*</Link>*/}

            <IconButton aria-label="Delete Comment" onClick={() => onDeleted(comment.id)}>
              <Grid item xs={8}>
                <DeleteIcon />
              </Grid>
            </IconButton>

          </CardActions>
        </ListItem>
      );
    } else {
      return (
        <EditComment
          comment={comment.body}
          onEditComment={this.onEditComment}
        />
      );
    }
  }

  render() {
    return (
      this.renderComment()
    );
  }
}

const styles = theme => ({
  avatar: {
    margin: 10,
    color: 'white',
    backgroundColor: '#673ab7',
  },
});

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
