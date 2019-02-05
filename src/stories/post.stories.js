import React from 'react';
import { storiesOf } from '@storybook/react';
import Post from '../components/Post';

const DATA_OBJECT = {
  title: 'Reactnd Project Readable',
  author: 'Filipe Natanael',
  timestamp: '1468479767190',
  category: 'redux',
  body: 'Just kidding. It takes more than 10 minutes to learn technology.',
  voteScore: -5,
}

storiesOf('Post', module)
  .add('when title is passed', () => (
    <Post
      post={DATA_OBJECT}></Post>
  ))
  .add('when body is not passed', () => (
    <Post
      post={{...DATA_OBJECT, body: ''}}></Post>
  ))
