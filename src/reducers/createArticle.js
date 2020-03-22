import { SET_ONE_VALUE, CLEAR_ALL_VALUE } from '../actions/createArticle';

const initialState = {
  title: '',
  tags: [],
  description: null,
  image: null,
};

export default function CreateArticleReducers(state = initialState, action) {
  switch (action.type) {
    case SET_ONE_VALUE:
      console.log('set One value', action);
      return { ...state, [action.payload.key]: action.payload.value };

    case CLEAR_ALL_VALUE:
      return initialState;

    default:
      console.log('No matching case found');
      return state;
  }
}
