import * as types from '../actions/types';

const initialState = {
    article: [],
    loading: true,
    error: null
};

function getArticle ( prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    
    if (action.type === types.GET_ARTICLE_REQUEST) {
        newState.loading = true;
    }

    if (action.type === types.GET_ARTICLE_SUCCESS) {
        newState.article = action.payload;
        newState.loading = false;
    }

    if (action.type === types.GET_ARTICLE_ERROR) {
        newState.error = action.payload;
        newState.loading = false;
    }

    return newState;
}


export default getArticle;