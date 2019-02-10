import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Favorite from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import Share from '@material-ui/icons/Share';
import School from '@material-ui/icons/School';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { capitalize } from '../helpers/capitalize';

class Categories extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }

  renderIcon = (key) => {
    switch (key) {
      case 'react':
        return <Favorite />
      case 'redux':
        return <Share />
      case 'udacity':
        return <School />
      default:
        return <Home />
    }
  }

  render() {
    const { categories, fetchCategoryPosts } = this.props;

    if (categories) {
      return (
        <List>
        <Link to="/"
              style={linkStyling}>
          <ListItem>
            <ListItemIcon>{this.renderIcon('allposts')}</ListItemIcon>
              <ListItemText primary="All Posts" />
          </ListItem>
        </Link>
        {_.map(categories, category => {
          return (
            <Link to={`/${category.path}`}
              onClick={() => fetchCategoryPosts(category.path)}
              style={linkStyling}
              key={category.path}>
              <ListItem button>
                <ListItemIcon>{this.renderIcon(category.name)}</ListItemIcon>
                <ListItemText primary={capitalize(category.name)} />
              </ListItem>
            </Link>
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

const linkStyling = {
  paddingLeft: 10,
  textDecoration: 'none'
}

export default Categories;
