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

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { categories, fetchCategoryPosts } = this.props;

    if (categories) {
      return (
        <List>
          <ListItem>
            <ListItemIcon>{this.renderIcon('allposts')}</ListItemIcon>
            <Link to="/"
                  style={linkStyling}>
              <ListItemText primary="All Posts" />
            </Link>
          </ListItem>
        {_.map(categories, category => {
          return (
            <ListItem button key={category.path}>
              <ListItemIcon>{this.renderIcon(category.name)}</ListItemIcon>
              <Link to={`/${category.path}`}
                    onClick={() => fetchCategoryPosts(category.path)}
                    style={linkStyling}>
                <ListItemText primary={this.capitalize(category.name)} />
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

const linkStyling = {
  paddingLeft: 10,
  textDecoration: 'none'
}

export default Categories;
