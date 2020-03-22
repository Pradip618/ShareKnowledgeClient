export const SET_ONE_VALUE = 'src/actions/createArticle/SET_ONE_VALUE';
export const CLEAR_ALL_VALUE = 'src/actions/createArticle/CLEAR_ALL_VALUE';

export const setOneValue = payload => ({
  type: SET_ONE_VALUE,
  payload,
});

export const clearAllValue = () => ({
  type: CLEAR_ALL_VALUE,
});
