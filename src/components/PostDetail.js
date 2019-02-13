import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import PostContainer from '../containers/Post';
import NotFound from './shared/NotFound';
import CommentsListContainer from '../containers/CommentsList';

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

            <CommentsListContainer postCategory={post.category} postId={post.id} />
            {/*I will block in another compoent late*/}

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
