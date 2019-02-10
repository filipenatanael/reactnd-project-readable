import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import CategoriesContainner from '../containers/Categories';
import { Link } from 'react-router-dom'

const drawerWidth = 240;
const GoToNewPost = props => <Link to="/post/new" {...props} />

const muiThemeCustom = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

class NavbarHeader extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
    this.props.onChangeDrawer(true)
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
    this.props.onChangeDrawer(false)
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div>
        <CssBaseline />
          <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          >
          <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
              <MenuIcon />
            </IconButton>

            <Link to="/" style={{ paddingLeft: 10, textDecoration: 'none', color: '#fff' }}>
              <Typography variant="h6" color="inherit" noWrap>
                React Project Readable
              </Typography>
            </Link>

            <div className={classes.button}>
              <MuiThemeProvider theme={muiThemeCustom}>
                <Button
                  component={GoToNewPost}
                  variant="contained"
                  color="primary"
                >
                Create Post
                </Button>
              </MuiThemeProvider>
            </div>

          </Toolbar>
          </AppBar>

          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
          <Divider />
            <CategoriesContainner />
          <Divider />
        </Drawer>
      </div>
    );
  }
}

NavbarHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 24
  }
});

export default withStyles(styles, { withTheme: true })(NavbarHeader);
