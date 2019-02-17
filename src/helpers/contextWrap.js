import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { shape } from 'prop-types';

const ID_DEFAULT = '6ni6ok3ym7mf1p33lnez';
const CATEGORY_DEFAULT = 'react';

// Instantiate router context
const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: { params: {
      id: ID_DEFAULT,
      category: CATEGORY_DEFAULT
    }},
  },
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) },
});

export function mountWrap(node) {
  return mount(node, createContext());
}
