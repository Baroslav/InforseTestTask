import Close from "../btn/Close"
import Confirm from "../btn/Confirm"
import "./modal.css"
import { useState } from "react"
import { useAppSelector,useAppDispatch } from "../../hooks/redux"
import { setAddClose } from "../../store/reducer/modalSlice"
import { error } from "console"



const AddProduct = () => {
    const [name , setName] = useState<string>("")
    const [image , setImage] = useState<string>("")
    const [count , setCount] = useState<string>()
    const [height , setHeight] = useState<string>()
    const [width , setWidth ] = useState<string>()
    const [weigth , setWeight] = useState<string>("")
    const addOpen = useAppSelector(state=>state.modalSlice.addOpen)
    const dispatch = useAppDispatch()
    
    const editClick = () => {
        dispatch(setAddClose())
        console.log(addOpen)
    }

    const addProduct = () => {
        fetch("http://localhost:3000/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: image,
                name: name,
                count: count,
                size: {
                    width: width,
                    height: height,
                },
                weight: weigth,
                comment: [],
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add product");
                }
                console.log("Product added successfully.");
                // Отримуємо відповідь від сервера та можливо щось робимо з нею
                return response.json();
            })
            .catch((error) => {
                console.error("Error adding product:", error);
            });
            dispatch(setAddClose())
    };

    return (
        <div className="add-modal-wrapper">
            <div className="add-modal">
                <Close onClick={editClick}/>
                <form action="">
                    <span>
                        <label htmlFor="">Add name</label>
                        <input value={name} onChange={(event)=>setName(event.target.value)} type="text" />
                    </span>
                    <span>
                        <label htmlFor="">Add image</label>
                        <input value={image} onChange={(event)=>setImage(event.target.value)} type="text" />
                    </span>
                    <span>
                        <label htmlFor="">Count of product</label>
                        <input value={count} onChange={(event)=>setCount(event.target.value)} type="text" />
                    </span>
                        <span>
                            <label htmlFor="">Add size of product</label>
                            <input value={height} onChange={(event)=>setHeight(event.target.value)}  type="text" />
                            <input value={width} onChange={(event)=>setWidth(event.target.value)}  type="text" />
                        </span>
                    <span>
                        <label htmlFor="">Add weight of product</label>
                        <input value={weigth} onChange={(event) => setWeight(event.target.value)} type="text" />
                    </span>
                </form>

                <Confirm onClick={addProduct}/>
            </div>
        </div>
    )
}

export default AddProduct