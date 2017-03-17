import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

function normaliseData (data) {
    return data.reduce(function (acc, item) {
        acc[item._id] = item;
        return acc;
    }, {});
}

export function getTopArticles (state, num) {
    return Object.keys(state.articles.byId).reduce(function (acc, id) {
        return acc.concat(state.articles.byId[id]);
    }, []).sort(function (a, b) {
        return b.votes - a.votes;
    }).slice(0, num);
}

function reducerArticles (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  if (action.type === types.FETCH_ALL_ARTICLES_REQUEST) {
    newState.loading = true;
    newState.error = null;
  }

  if (action.type === types.FETCH_ALL_ARTICLES_SUCCESS) {
    newState.byId = action.data;
    newState.loading = true;
    newState.byId = normaliseData(action.data);    
  }

  if (action.type === types.FETCH_ALL_ARTICLES_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }


  return newState;
}

export default reducerArticles;
