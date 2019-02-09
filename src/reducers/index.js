import { combineReducers } from 'redux';
import Categories from './categories';
import Posts from './posts';
import PostsSort from './posts_sort';

const rootReducer = combineReducers({
  categories: Categories,
  posts: Posts,
  postsOrder:PostsSort,
});

export default rootReducer;
