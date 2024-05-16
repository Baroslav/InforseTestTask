import Close from "../btn/Close"
import { useAppSelector, useAppDispatch } from "../../hooks/redux"
import { setDeleteOpen , setDeletedId } from "../../store/reducer/modalSlice"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductListItem = ({ imgUrl, name, id }: { imgUrl: string, name: string, id: any }) => {
    const deleteOpen = useAppSelector(state => state.modalSlice.deleteOpen)
    const deletedId = useAppSelector(state => state.modalSlice.deletedId)
    const dispatch = useAppDispatch()
    const closeDeleteClick = () => {
        dispatch(setDeleteOpen())
        dispatch(setDeletedId(id))
        console.log(deletedId)
    }   


        

    return (
        <div className="product-item">
             <Link key={id} to={`/${id}`}>
                <img src={imgUrl} alt="" />
                <h3>{name}</h3>
            </Link>
            <Close onClick={closeDeleteClick} />
        </div>
       
    )
}

export default ProductListItem