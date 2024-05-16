import AddProduct from "../modal/AddProduct"
import Delete from "../modal/DeleteProduct"
import ProductList from "./PorductList"
import { useAppDispatch , useAppSelector  } from "../../hooks/redux" 


const ProductSection = () => {
    const addOpen = useAppSelector(state=>state.modalSlice.addOpen)
    const deleteOpen = useAppSelector(state=>state.modalSlice.deleteOpen)

    return(
       <>
        {
            deleteOpen ? <Delete/> : ""
        }
        {
            addOpen ? <AddProduct/> : ""
        }
        <ProductList/> 
       </>
    )
}

export default ProductSection