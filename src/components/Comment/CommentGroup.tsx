import Comments from "./Comments"
import CreateComment from "./CreateComment"

const CommentGroup = () => {
    return (
        <div className="comment-group">
            <CreateComment/>
            <Comments/>
        </div>
    )
}

export default CommentGroup