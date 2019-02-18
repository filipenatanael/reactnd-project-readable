import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index'
import { MemoryRouter, withRouter } from 'react-router-dom';
import Post from '../components/Post';

const TPost = withRouter(Post);

/* To enable Redux DevTools Extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

const POST_OBJECT = {
  title: 'Reactnd Project Readable',
  author: 'Filipe Natanael',
  timestamp: '1468479767190',
  category: 'redux',
  body: 'Just kidding. It takes more than 10 minutes to learn technology.',
  voteScore: -5,
}

function fetchCommentsCount() {

}

storiesOf('Post', module)
.addDecorator(story =>
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    </Provider>)
  .add('when title is passed', () => (
    <TPost
      post={POST_OBJECT}
      fetchCommentsCount={fetchCommentsCount}
      ></TPost>
  ))
  .add('when body is not passed', () => (
    <TPost
      post={{...POST_OBJECT, body: ''}}
      fetchCommentsCount={fetchCommentsCount}
      ></TPost>
  ))
