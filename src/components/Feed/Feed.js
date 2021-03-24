import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getComments, getPhotos } from "../../store/actions/actions";
import './Feed.scss'

export default function Feed() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos())
        dispatch(getComments())
    }, [])

    const photos = useSelector(state => state.photosReducer.data);
    const comments = useSelector(state => state.commentsReducer.data);

    return (
        <div className="photos-wrapper">
            {photos.length > 0 &&
                photos.map((photo) => (
                    <div className="frame">
                        <p className="author">{photo.author}</p>
                        <img className="photo" src={photo.download_url} alt={`${photo.author}'s image`}></img>
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
    )
}
