import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'
import Main from '../components/Main';
import NavbarHeader from '../components/NavbarHeader';

// To enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const drawerWidth = 240;

storiesOf('Main', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('loading entire application', () => <Main />)

storiesOf('NavbarHeader', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('passing headerTitle', () =>
    <NavbarHeader
      headerTitle={'Reactnd Project Readable'}
      drawerWidth={drawerWidth}></NavbarHeader>);
