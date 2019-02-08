import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comment from '@material-ui/icons/Comment';
import Star from '@material-ui/icons/Star';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColor from '@material-ui/icons/BorderColor';

function timestampToDate(unixTimestamp) {
    const date = new Date(unixTimestamp);
    return date.toDateString();
}

class Post extends React.Component {

  render() {
    const { classes } = this.props;
    const { post } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          title={post.title}
          subheader={`Posted by ${post.author} - ${timestampToDate(post.timestamp)}`}
        />

        { post.body.length > 0 &&(
          <CardContent>
            <Typography component="p">
              {`[ ${post.category} ] ${post.body}`}
            </Typography>
          </CardContent>
        )}

        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Cart">
            <Badge badgeContent={post.voteScore} color="primary" classes={{ badge: classes.badge }}>
              <Star />
            </Badge>
          </IconButton>

          <IconButton aria-label="Cart">
            <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
              <Comment />
            </Badge>
          </IconButton>

          {/* editButtons */}
          <Grid className={classes.actionsRight}>
            <IconButton
              aria-label="Edit Post"
              onClick={() => false}
              style={{ backgroundColor: 'transparent' }}
            >
                <Grid item xs={8}>
                  <BorderColor className={classes.icon} />
                </Grid>
            </IconButton>

            <IconButton
              aria-label="Edit Post"
              onClick={() => false}
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
});

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
