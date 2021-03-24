import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, withRouter } from "react-router-dom";
import { getComments, getPhoto, getPhotos } from "../../store/actions/actions";
import './Feed.scss'

function Feed() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos())
        dispatch(getComments())
    }, [])

    const photos = useSelector(state => state.photosReducer.data);
    const comments = useSelector(state => state.commentsReducer.data);

    const dispatchImageToState = (photo) => {
        dispatch(getPhoto(photo));
    }

    return (
        <>
            <div className="photos-wrapper">
                {photos.length > 0 &&
                    photos.map((photo) => (                       
                        <div className="frame">
                            <p className="author">{photo.author}</p>
                            <Link 
                                to="/imagedetail"
                                onClick={() => dispatchImageToState(photo)}
                            >
                                <img className="photo" src={photo.download_url} alt={`${photo.author}'s image`}></img>
                            </Link>
                            {comments.length > 0 &&
                                comments.map((comment) => (
                                    <>
                                        <p className="photo-comment">
                                            <span>{comment.name}</span> - {comment.body}
                                        </p>
                                    </>
                                ))}
                        </div>                      
                    ))
                }
            </div>
        </>
    )
}

export default withRouter(Feed);