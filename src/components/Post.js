import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Comment from '@material-ui/icons/Comment';
import Star from '@material-ui/icons/Star';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAlt from '@material-ui/icons/ThumbDownAlt';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColor from '@material-ui/icons/BorderColor';

import { timestampToDate } from '../helpers/timestampToDate';
import { capitalize } from '../helpers/capitalize';

class Post extends React.Component {

  state = { _commentCount: 0 }

  componentWillMount() {
    const { post } = this.props;
    this.props.fetchCommentsCount(post.id, (data) => { this.setState({ _commentCount: data.amount }); });
  }

  render() {
    const { classes, post, onDeletePost, commentCount, voteForPost,
      match: { params: { id } } } = this.props;
    // const { id } = this.props.match.params;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={id ? `${post.title}` : <Link to={`${post.category}/${post.id}`} style={{ textDecoration: 'none', color: '#000' }}>{post.title}</Link>}
          subheader={`Posted by ${post.author} - ${timestampToDate(post.timestamp)}`}
        />

        { post.body.length > 0 &&(
          <CardContent>
            <Typography component="p">
              <b>{`( ${capitalize(post.category)} )`}</b> {post.body}
            </Typography>
          </CardContent>
        )}

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Vote Score">
            <Badge badgeContent={post.voteScore} color="primary" classes={{ badge: classes.badge }}>
              <Star />
            </Badge>
          </IconButton>

          <IconButton
            component={Link} to={`/${post.category}/${post.id}`}
            aria-label="Comment Count">
            <Badge badgeContent={commentCount ? commentCount : this.state._commentCount} color="primary" classes={{ badge: classes.badge }}>
              <Comment />
            </Badge>
          </IconButton>

          <IconButton aria-label="Up Vote" onClick={() => voteForPost(post.id, 'upVote') }>
            <ThumbUpAlt />
          </IconButton>

          <IconButton aria-label="Down Vote" onClick={() => voteForPost(post.id, 'downVote')}>
            <ThumbDownAlt />
          </IconButton>

          {/* editButtons */}
          <Grid className={classes.actionsRight}>
            <IconButton
              aria-label="Edit Post"
              component={Link} to={`/${post.category}/edit/${post.id}`}
              style={{ backgroundColor: 'transparent' }}
            >
                <Grid item xs={8}>
                  <BorderColor className={classes.icon} />
                </Grid>
            </IconButton>

            <IconButton
              aria-label="Delete Post"
              onClick={() =>
                onDeletePost(post.id, () => { this.props.history.push('/') } )}
              style={{ backgroundColor: 'transparent' }}
            >
                <Grid item xs={8}>
                  <DeleteIcon className={classes.icon} />
                </Grid>
            </IconButton>
          </Grid>
        </CardActions>

      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    maxWidth: '100%',
    backgroundColor: '#fff7e6'
  },
  actions: {
    display: 'flex',
  },
  actionsRight: {
    marginLeft: 'auto',
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 25,
  },
});

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Post));
