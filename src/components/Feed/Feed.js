import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPhotos } from "../../store/actions/actions";
import './Feed.scss'

export default function Feed() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos())
    }, [])

    const photos = useSelector(state => state.photosReducer.data);

    return (
        <div className="photos-wrapper">
            {photos.length > 0 &&
                photos.map((photo) => (
                    <div className="frame">
                        <p className="author">{photo.author}</p>
                        <img className="photo" src={photo.download_url} alt={`${photo.author}'s image`}></img>
                    </div>
                ))
            }
        </div>
    )
}
