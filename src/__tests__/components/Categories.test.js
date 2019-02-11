import React from 'react';
import { shallow } from 'enzyme';
import { wrap } from 'module';
import ListItemText from '@material-ui/core/ListItemText';
import { mountWrap } from '../../helpers/contextWrap'
import Categories from '../../components/Categories';

describe('<Categories />', () => {

  const DATA_CATEGORIES = [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
  ]

  const mockFetchCategories = jest.fn();
  const mockFetchCategoryPosts = jest.fn();

  it('shallow renders correctly', () => {
    expect(shallow(<Categories
      categories={DATA_CATEGORIES}
      fetchCategories={mockFetchCategories}
      fetchCategoryPosts={mockFetchCategoryPosts} />));
  });

  it('renders all categories whether categories prop is passed', () => {
    const wrapper = mountWrap(<Categories
      categories={DATA_CATEGORIES}
      fetchCategories={mockFetchCategories}
      fetchCategoryPosts={mockFetchCategoryPosts} />);

      expect(wrapper.find(ListItemText).filterWhere((item) => {
        return item.prop('primary') === 'React';
      }).simulate('click'))
    });

  it('renders a message loading whether categories prop is not passed', () => {
    const wrapper = mountWrap(<Categories
      fetchCategories={mockFetchCategories}
      fetchCategoryPosts={mockFetchCategoryPosts} />);
      expect(wrapper.find('div').text().replace(/<!--[^>]*-->/g, "")).toContain('The Component is Loading...');
    });

});
