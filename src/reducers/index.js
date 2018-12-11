import { combineReducers } from 'redux';
import CategoriesReducer from './categories_reducer';
import PostsReducer from './posts_reducer';


const rootReducer = combineReducers({
  categories: CategoriesReducer,
  posts: PostsReducer
});

export default rootReducer;
