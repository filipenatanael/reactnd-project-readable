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
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Badge from '@material-ui/core/Badge';
import Star from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';

import { timestampToDate } from '../helpers/timestampToDate';
import { getFisrtChar } from '../helpers/strings';

class Comment extends Component {



  render() {
    const { classes, comment, postCategory, onCommentDeleted } = this.props
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
            <Badge badgeContent={5} color="primary" classes={{ badge: classes.badge }}>
              <Star />
            </Badge>
          </IconButton>

          <IconButton aria-label="Up Vote" onClick={() => false}>
            <ArrowUpward />
          </IconButton>

          <IconButton aria-label="Down Vote" onClick={() => false}>
            <ArrowDownward />
          </IconButton>

          <Link to={`/${postCategory}/${comment.parentId}/comments/edit/${comment.id}`}>
            <IconButton aria-label="Edit Comment">
              <Grid item xs={8}>
                <BorderColor />
              </Grid>
            </IconButton>
          </Link>

          <IconButton aria-label="Delete Comment" onClick={() => onCommentDeleted(comment.id)}>
            <Grid item xs={8}>
              <DeleteIcon />
            </Grid>
          </IconButton>

        </CardActions>
      </ListItem>
    );
  }
}

const styles = theme => ({
  avatar: {
    margin: 10,
    color: '#fff',
backgroundColor: '#673ab7',
  },
});

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);
