import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { MemoryRouter, withRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'
import Main from '../components/Main';

/* To enable Redux DevTools Extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const drawerWidth = 240;

/* The match, history and location props are only passed to components rendered by a Route component.
Other components that need access to these properties can be wrapped with a call to the withRouter HOC. */
const TMain = withRouter(Main);

const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

storiesOf('Main', module)
  .addDecorator(story => (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>
  ))
  .add('drawable behavior', () => <TMain />)
