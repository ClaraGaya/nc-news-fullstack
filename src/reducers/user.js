import * as types from '../actions/types';

const initialState = {
    user: [],
    loading: true,
    error: null
};

function getUser ( prevState = initialState, action) {
    const newState = Object.assign({}, prevState)
    
    if (action.type === types.GET_USER_REQUEST) {
        newState.loading = true;
    }

    if (action.type === types.GET_USER_SUCCESS) {
        newState.user = action.payload;
        newState.loading = false;
    }

    if (action.type === types.GET_USER_ERROR) {
        newState.error = action.payload;
        newState.loading = false;
    }

    return newState;
}


export default getUser;