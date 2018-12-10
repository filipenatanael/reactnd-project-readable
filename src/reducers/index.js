import { combineReducers } from 'redux';
import CategoriesReducer from './categories_reducer';

const rootReducer = combineReducers({
  categories: CategoriesReducer
});

export default rootReducer;
