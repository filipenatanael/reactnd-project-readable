import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { MemoryRouter, withRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'

import Main from '../components/Main';
import NavbarHeader from '../components/NavbarHeader';
import Post from '../components/Post';

/* To enable Redux DevTools Extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* The match, history and location props are only passed to components rendered by a Route component.
Other components that need access to these properties can be wrapped with a call to the withRouter HOC. */
const TMain = withRouter(Main);

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const drawerWidth = 240;

storiesOf('Main', module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>
  ))
  .add('drawable behavior', () => <TMain />)

storiesOf('NavbarHeader', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('passing headerTitle', () =>
    <NavbarHeader
      headerTitle={'Reactnd Project Readable'}
      drawerWidth={drawerWidth}></NavbarHeader>);


const post = {
  title: 'Reactnd Project Readable - Testing',
  author: 'Filipe Natanael',
  timestamp: '1468479767190',
  category: 'redux',
  body: 'Just kidding. It takes more than 10 minutes to learn technology.',
  voteScore: -5,
}

storiesOf('Post', module)
  .add('passing title', () => (
    <Post
      post={post}></Post>
  ));
