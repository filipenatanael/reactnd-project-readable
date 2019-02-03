import React from 'react';
import { shallow, mount } from 'enzyme';
import Post from './components/Post';
import { wrap } from 'module';

describe('<Post />', () => {
  const getPrices = jest.fn();

  // const props = {
  //   fetching: false,
  //   error: false,
  //   prices: {},
  //   getPrices: getPrices,
  // };

  const post = {
    title: 'Reactnd Project Readable - Testing',
    author: 'Filipe Natanael',
    timestamp: '1468479767190',
    category: 'redux',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    voteScore: -5,
  }

  it('shallow renders correctly', () => {
    expect(shallow(<Post post={post} />));
  });

});
