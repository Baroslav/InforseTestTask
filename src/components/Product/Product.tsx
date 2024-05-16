import "./product.css"
import { useAppSelector,useAppDispatch } from "../../hooks/redux"
import { setEditOpen } from "../../store/reducer/modalSlice"
import EditProduct from "../modal/EditProduct"
import CommentGroup from "../Comment/CommentGroup"
import Edit from "../btn/Edit"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

const Product = () => {
    const [data,setData] = useState<any>(null)
    const editOpen = useAppSelector(state=>state.modalSlice.editOpen)
    const dispatch = useAppDispatch()
    const {id} = useParams()

    const editClick = () => {
        dispatch(setEditOpen())

    }
   
    useEffect(()=> {
        fetch(`http://localhost:3000/product/${id}`)
            .then(response=>response.json())
            .then(data => setData(data))
            .catch(error => console.log("Error fetching data:" , error))
            console.log(data)
    },[editOpen])

    return (  
        <>
        {editOpen ? <EditProduct /> : ""}
        {data !== null ? (
            <section className="product-section">
                <div className="product">
                    <img src={data.imgUrl} alt="Image" />
                    <div>
                        <h3>{data.name}</h3>
                        <p>Count :{data.count}</p>
                        <span>
                            <p>Size</p>
                            <p>Heidht : {data.size.width}</p>
                            <p>Width : {data.size.height}</p>
                        </span>
                        <span>Weight:{data.weight}</span>
                    </div>
                </div>
                <Edit onClick={editClick} />
                <CommentGroup />
            </section>
        ) : (
            <div>Loading</div>
        )}
    </>
    )
}

export default Product