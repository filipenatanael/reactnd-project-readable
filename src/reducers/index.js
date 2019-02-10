import { combineReducers } from 'redux';
import Categories from './categories';
import Posts from './posts';
import PostsSort from './posts_sort';
import Comments from './comments';

const rootReducer = combineReducers({
  categories: Categories,
  posts: Posts,
  postsOrder: PostsSort,
  comments: Comments,
});

export default rootReducer;
