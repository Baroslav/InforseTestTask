import { useSelector } from "react-redux"
import Confirm from "../btn/Confirm"
import './comment.css'
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { addComment } from "../../store/reducer/commentSlice"

const CreateComment = () => {
    const [data,setData] =useState<any>(null)
    const {id} = useParams()
    const [comment , setCommnet] = useState<string>("")
    const commentAdd = useAppSelector(state=>state.commentSlice.commentAdd)
    const Dispatch = useAppDispatch()

    const addComment = async () => {
        const response = await fetch(`http://localhost:3000/product/${id}`);
        const product = await response.json();


        const newComment = {
            id: product.comment ? product.comment.length + 1 : new Date().toLocaleString(), 
        };

        fetch(`http://localhost:3000/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : newComment.id,
                productId : id,
                description: comment,
                date: new Date().toLocaleString()
            }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Comment added successfully');
            } else {
                console.error('Failed to add comment');
            }
        })
        .catch(error => {
            console.error('Error adding comment:', error);
        });
        setCommnet('')
    }

    return (
        <>
        <h3 className="comment-header-create">Create comment</h3>
        <textarea value={comment} onChange={(event)=>setCommnet(event.target.value)} className="comment-text" rows={5} cols={80}></textarea>
        <Confirm onClick={addComment}/>
        </>
    )
}


export default CreateComment