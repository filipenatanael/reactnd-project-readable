import React from 'react';
import { shallow } from 'enzyme';
import { wrap } from 'module';
import CategoriesContainer from '../../containers/Categories';

describe('<PostsListContainner />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<CategoriesContainer />));
  });
});
