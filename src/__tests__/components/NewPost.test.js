import React from 'react';
import { shallow } from 'enzyme';
import NewPost from '../../components/NewPost';

describe('<NewPost />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<NewPost />));
  });
});
