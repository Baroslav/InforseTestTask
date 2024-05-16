import { useAppSelector,useAppDispatch } from "../../hooks/redux"
import modalSlice from "../../store/reducer/modalSlice"
import Add from "../btn/Add"
import ProductListItem from "./ProductListItem"
import "./product.css"
import { setAddOpen } from "../../store/reducer/modalSlice"
import { useEffect, useState } from "react"
import { error } from "console"


const ProductList = () => {
    const [data ,setData] = useState<any>(null)
    const addOpen = useAppSelector(state=>state.modalSlice.addOpen)
    const deleteOpen = useAppSelector(state=>state.modalSlice.deleteOpen)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(response=>response.json())
            .then(data => setData(data))
            .catch(error => console.log("Error fetching data:" , error))
    },[addOpen,deleteOpen])
        
    const addClick = () => {
        dispatch(setAddOpen())
        console.log(addOpen)
    }

    return (
        <section className="product-list-section">
            <div className="btn-group">
                   <Add addClick = {addClick}/>
            </div>
            <div className="product-list">
                
            {
            data!==null ?
            (
                data.map((item :any) => {
                       return <ProductListItem  imgUrl={item.imgUrl} name={item.name} id={item.id}/>;
                })
            ) 
            :
            (
                <div className="loading">Loading...</div>
            )
            }
            </div>
        </section>
    )
}

export default ProductList