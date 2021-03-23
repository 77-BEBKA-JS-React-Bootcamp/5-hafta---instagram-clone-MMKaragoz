export const getPhotos = () => {
    return (dispatch) => {
        dispatch({type: 'GET_PHOTOS_REQUEST'});
        fetch(`https://picsum.photos/v2/list?page=2&limit=20`)
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_PHOTOS_SUCCESS', payload: data}))
        .catch(error => dispatch({type: 'GET_PHOTOS_ERROR', payload: error}));
    };
};