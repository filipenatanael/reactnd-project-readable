import React from 'react';
import { shallow } from 'enzyme';
import { wrap } from 'module';
import NotFound from '../../components/shared/NotFound';

describe('<NotFound />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<NotFound />));
  });
});
