import React from 'react';
import { shallow } from 'enzyme';
import EditPostContainer from '../../containers/EditPost';

describe('<EditPost />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<EditPostContainer />));
  });
});
