import Cancle from "../btn/Cancle"
import Confirm from "../btn/Confirm"
import "./modal.css"
import { setDeleteClose } from "../../store/reducer/modalSlice"
import { useAppSelector,useAppDispatch } from "../../hooks/redux"
import { error } from "console"

const Delete = ({}) => {
    const deleteOpen = useAppSelector(state=>state.modalSlice.deleteOpen)
    const deletedId = useAppSelector(state=>state.modalSlice.deletedId)
    const dispatch = useAppDispatch()
    
    const cancleClick = () => {
        dispatch(setDeleteClose())
        console.log(deleteOpen)
    }
    const confirmClick = () => {
        fetch(`http://localhost:3000/product/${deletedId}` , {
            method : "DELETE"
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('Failed to delete product')
            }
            console.log('Product deleted')
        })
        .catch(error => {
            console.log('Error deleting data' , error)
        })
        dispatch(setDeleteClose())
    }

    return (
        <div className="delete-wrapper">
            <div className="delete">
            <h3>Confirm delete</h3>
            <div className="btn-delete-group">
                <Confirm onClick ={confirmClick}/>
                <Cancle onClick={cancleClick}/>
            </div>
        </div>
        </div>
    )
}

export default Delete