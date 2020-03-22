import { combineReducers } from 'redux';
import CreateArticleReducer from './reducers/createArticle';

export default combineReducers({
  CreateArticle: CreateArticleReducer,
});
