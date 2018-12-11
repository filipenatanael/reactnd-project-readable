import React, { Component } from 'react';
import _ from 'lodash';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { fetchCategoryPosts } from '../actions';
import Post from './Post';

class PostsList extends Component {
  componentWillMount() {
    if (this.props.match.params.category) {
      const {
        fetchCategoryPosts,
        match: { params: { category } } } = this.props;
        fetchCategoryPosts(category.toLowerCase());
    } else {
      console.log('Not passed yet.');
    }
  }

  render(){
    const { posts } = this.props;
    return(
      <List>
        {_.map(posts, post => {
          return (
            <Post post={post} />
          )
        })}
      </List>
    );
  }
}

function mapStateToProps (state) {
    const posts = _.filter(state.posts, post => !post.deleted);
    console.log(posts);
    return { posts }
}

export default connect(mapStateToProps, {fetchCategoryPosts })(PostsList);

// return (
//   <ListItem button key={post.id}>
//   <RecipeReviewCard />
//     <ListItemText primary={post.title} />
//   </ListItem>)
