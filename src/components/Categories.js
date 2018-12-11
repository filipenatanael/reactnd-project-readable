import React, { Component } from 'react';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchCategories,
  fetchCategoryPosts
} from '../actions';

// <ListItemIcon>{counts % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>

class Categories extends Component {
  componentWillMount(){
    this.props.fetchCategories()
  }

  render() {
    const { categories, fetchCategoryPosts } = this.props;
    if (categories) {
      return (
        <List>
          {_.map(categories, category => {
            return (
              <ListItem button key={category.path}>

                <Link to={`/${category.path}`}
                      onClick={() => fetchCategoryPosts(category.path)}>
                <ListItemText primary={category.name} />
                </Link>
              </ListItem>
            )
          })}
        </List>
      );
    }
    return (
        <div>The Component is Loading...</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(Categories);
