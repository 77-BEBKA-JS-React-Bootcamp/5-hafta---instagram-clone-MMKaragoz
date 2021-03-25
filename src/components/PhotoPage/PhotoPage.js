import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { addComment, getComments } from "../../store/actions/actions";
import "./PhotoPage.scss";

function PhotoPage() {

    const dispatch = useDispatch();
    const photo = useSelector(state => state.photosReducer.photoToGet);
    const comments = useSelector(state => state.commentsReducer.data);

    const [comment, setComment] = useState({});

    photo.comments = [...comments]

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addComment(comment))
    }

    return (
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
                ))
            }
            <form 
                onSubmit={handleSubmit}
            >                    
                <input
                    id={`${photo.id}`}
                    name={`${photo.id}`}
                    onChange={(event)=> setComment({name: "Mert", body: event.target.value})}
                />
                <button type="submit">Comment as Mert</button>
            </form>

        </div>
    )
}

export default withRouter(PhotoPage)