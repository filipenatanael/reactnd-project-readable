import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Main from './components/Main';
import NewPost from './components/NewPost';
import NavbarHeader from './components/NavbarHeader';
import EditPostContainer from './containers/EditPost';

const drawerWidth = 240;

class App extends Component {
  state = {
    open: false,
  };

  onChangeDrawer = (status) => {
    this.setState({
      open: status
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <NavbarHeader onChangeDrawer={this.onChangeDrawer} />
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/post/new" exact component={NewPost} />
                <Route path="/:category/edit/:id" children={props => <EditPostContainer {...props} />} />
                <Route path="/:category" exact component={props => <Main {...props} />} />
              </Switch>
            </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
});

export default withStyles(styles)(App);
