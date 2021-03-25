import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import "./PhotoPage.scss";

function PhotoPage() {

    const photo = useSelector(state => state.photosReducer.photoToGet);
    const comments = useSelector(state => state.commentsReducer.data);

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
                
            >                    
                <input
                    id={`${photo.id}`}
                    name={`${photo.id}`}
                    
                />
                <button type="submit">Comment as Mert</button>
            </form>

        </div>
    )
}

export default withRouter(PhotoPage)