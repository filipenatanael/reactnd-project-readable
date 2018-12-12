import { combineReducers } from 'redux';
import CategoriesReducer from './categories_reducer';
import PostsReducer from './posts_reducer';
import PostsSortReducer from './posts_sort_reducer';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer,
  postsOrder:PostsSortReducer
});

export default rootReducer;
