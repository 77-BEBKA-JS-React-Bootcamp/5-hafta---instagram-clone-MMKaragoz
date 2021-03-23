const initialState = {
    data: {},
    isLoading: false
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHOTOS_REQUEST':
            return {
                ...state,
                isLoading: true
            };
        case 'GET_PHOTOS_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case 'GET_PHOTOS_ERROR':
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    };
};