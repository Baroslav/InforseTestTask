import { useParams } from "react-router-dom"
import Close from "../btn/Close"


const CommentItem = ({content, commentId , setCommentEddet  , commentEddet}:{content : string , commentId : string , commentEddet : boolean,setCommentEddet :any}) => {
    const {id} = useParams()

    const deleteComment = () => {
        fetch(`http://localhost:3000/comments/${commentId}` , {
            method : "DELETE"
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Failed to delete comment')
            }
            console.log('Comment deleted')
        })
        .catch(error => {
            console.log('Error delet comment ', error)
        })
        setCommentEddet(!commentEddet)
    }

    return (
        <div className="comment">
            <p className="comment-content">{content}</p>
            <Close onClick={deleteComment}/>
        </div>
    )
}

export default CommentItem