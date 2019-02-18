import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'
import { MemoryRouter, withRouter } from 'react-router-dom';
import NavbarHeader from '../components/NavbarHeader';

const TNavbarHeader = withRouter(NavbarHeader);

/* To enable Redux DevTools Extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const drawerWidth = 240;

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

storiesOf('NavbarHeader', module)
  .addDecorator(story =>
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>)
  .add('passing headerTitle', () =>
    <TNavbarHeader
      headerTitle={'Reactnd Project Readable'}
      drawerWidth={drawerWidth}>
    </TNavbarHeader>);
