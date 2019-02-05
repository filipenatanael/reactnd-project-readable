import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'
import NavbarHeader from '../components/NavbarHeader';

/* To enable Redux DevTools Extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const drawerWidth = 240;

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

storiesOf('NavbarHeader', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('passing headerTitle', () =>
    <NavbarHeader
      headerTitle={'Reactnd Project Readable'}
      drawerWidth={drawerWidth}>
    </NavbarHeader>);
