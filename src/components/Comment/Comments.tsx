import { useParams } from "react-router-dom"
import CommentItem from "./CommentItem"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/redux"

const Comments = () => {
    const [data, setData] = useState<any>(null)
    const [commentEddet , setCommentEddet ] = useState<boolean>(false)
    const { id } = useParams()
    const commentAdd = useAppSelector(state=>state.commentSlice.commentAdd)

    useEffect(() => {
        fetch(`http://localhost:3000/comments`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data); 
            })
            .catch(error => console.log("Error fetching data:", error))
    }, [id,commentEddet,])

    return (
        <div className="comments">
            <h3>Comments</h3>
            {   
                data  ? 
                (
                    data.map((item: any) => ( 
                        id !== item.productId ? "" :
                        <CommentItem commentEddet={commentEddet} setCommentEddet={setCommentEddet } commentId={item.id} content={item.description}/>
                    ))
                )
                :
                (
                    <div className="noAvailible">No comments available</div>
                )
            }
        </div>
    )
}

export default Comments