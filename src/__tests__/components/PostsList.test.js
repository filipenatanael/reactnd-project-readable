import React from 'react';
import { shallow } from 'enzyme';
import PostsListContainner from '../../containers/PostsList';

describe('<PostsListContainner />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<PostsListContainner />));
  });
});
