import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchPosts,
  fetchCategoryPosts,
  postSortOrder
} from '../actions';

import Post from './Post';

class PostsList extends Component {
  componentWillMount() {
    if (this.props.match.params.category) {
      const {
        fetchCategoryPosts,
        match: { params: { category } } } = this.props;
        fetchCategoryPosts(category.toLowerCase());
      } else {
        this.props.fetchPosts();
      }
    }

    renderPosts() {
      const { posts  } = this.props;

      if (posts.length > 0) {
        const orderedPosts = _.sortBy(posts, this.props.postsOrder).reverse();
        return _.map(orderedPosts, post => <Grid item xs={6}><Post key={post.id} post={post} /></Grid>);
      }
      return <div>Loading Posts...</div>
    }

    render(){
      const { postSortOrder } = this.props;
      const { classes } = this.props;
      return(
        <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Select
              value={'this.state.age'}
              onChange={event => postSortOrder(event.target.value)}
            >
              <MenuItem value="">
              <em>None</em>
              </MenuItem>
              <MenuItem value={0}>Votes</MenuItem>
              <MenuItem value={1}>Date</MenuItem>
            </Select>
            </Paper>
          </Grid>
            {this.renderPosts()}
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
    paper: {
      padding: theme.spacing.unit,
      textAlign: 'right',
      height: 55,
      color: theme.palette.text.secondary,
    },
});

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps (state) {
    const postsFiltered = _.filter(state.posts, post => !post.deleted);
    return {
      posts: postsFiltered,
      postsOrder: state.postsOrder
    }
  }

export default withStyles(styles)(connect(mapStateToProps, {
  fetchPosts,
  fetchCategoryPosts,
  postSortOrder})(PostsList));