import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import BorderColor from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import TextField from '@material-ui/core/TextField';

import PostContainer from '../containers/Post';
import NotFound from './shared/NotFound';

class PostDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id, () => false);
  }

  render(){
    const { classes, post, deletePost } = this.props;
    const { match: { params: { category } } } = this.props;

    return(
      (!post || post.category !== category)
      ? <NotFound />
      : <div className={classes.root}>
          <Grid container spacing={24}>

            <Grid item xs={12}>
              <Grid item xs={12}><PostContainer key={post.id} post={post} onDeletePost={deletePost} /></Grid>
            </Grid>

            <br />
            <Grid item xs={12}>
              <Card className={classes.cardComment} style={{ padding: 10 }}>
              <TextField
                className={classes.inputbackground}
                id="input-comments"
                label="Type your comment"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.inputLabelProps
                  }
                }}
                />
              </Card>
            </Grid>
            <br />
            {/*I will block in another compoent late*/}
          <Grid item xs={12}>
            <Card className={classes.card}>
              <List>

                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/2.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                  <CardActions className={classes.actions} disableActionSpacing>

                    <IconButton aria-label="Up Vote" onClick={() => false}>
                      <ArrowUpward />
                    </IconButton>

                    <IconButton aria-label="Down Vote" onClick={() => false}>
                      <ArrowDownward />
                    </IconButton>

                    <IconButton aria-label="Edit Comment">
                      <Grid item xs={8}>
                        <BorderColor />
                      </Grid>
                    </IconButton>

                    <IconButton aria-label="Delete Comment">
                      <Grid item xs={8}>
                        <DeleteIcon />
                      </Grid>
                    </IconButton>

                  </CardActions>
                </ListItem>


                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography component="span" className={classes.inline} color="textPrimary">
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                  <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Up Vote" onClick={() => false}>
                      <ArrowUpward />
                    </IconButton>
                    <IconButton aria-label="Down Vote" onClick={() => false}>
                      <ArrowDownward />
                    </IconButton>
                    <IconButton aria-label="Edit Comment">
                      <Grid item xs={8}>
                        <BorderColor />
                      </Grid>
                    </IconButton>
                    <IconButton aria-label="Delete Comment">
                      <Grid item xs={8}>
                        <DeleteIcon />
                      </Grid>
                    </IconButton>
                  </CardActions>
                </ListItem>

                </List>
            </Card>
          </Grid>
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
  cardComment: {
    maxWidth: '100%',
    backgroundColor: '#fff'
  },
  inputLabelProps: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputbackground: {
    background: '#fff'
  },
});

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostDetail);
