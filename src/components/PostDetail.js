import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
});

PostDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostDetail);
