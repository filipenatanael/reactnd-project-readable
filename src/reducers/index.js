import { combineReducers } from 'redux';
import CategoriesReducer from './categories_reducer';

const rootReducer = combineReducers({
  CategoriesReducer: CategoriesReducer
});

export default rootReducer;
