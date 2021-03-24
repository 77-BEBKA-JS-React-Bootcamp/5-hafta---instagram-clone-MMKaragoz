export const getPhotos = () => {
    return (dispatch) => {
        dispatch({type: 'GET_PHOTOS_REQUEST'});
        fetch(`https://picsum.photos/v2/list?page=2&limit=20`)
        .then(response => response.json())
        .then(data => dispatch({type: 'GET_PHOTOS_SUCCESS', payload: data}))
        .catch(error => dispatch({type: 'GET_PHOTOS_ERROR', payload: error}));
    };
};

export const getComments = () => {
    return (dispatch) => {
      dispatch({ type: "GET_COMMENTS_REQUEST" });
      fetch("https://jsonplaceholder.typicode.com/posts/2/comments")
        .then((response) => response.json())
        .then((data) => dispatch({ type: "GET_COMMENTS_SUCCESS", payload: data }))
        .catch((error) =>
          dispatch({ type: "GET_COMMENTS_ERROR", payload: error })
        );
    };
};