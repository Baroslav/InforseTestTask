import Close from "../btn/Close"
import Confirm from "../btn/Confirm"
import "./modal.css"
import { useAppSelector,useAppDispatch } from "../../hooks/redux"
import { setEditClose } from "../../store/reducer/modalSlice"
import { useParams } from "react-router-dom"
import { useState , useEffect } from "react"



const EditProduct = () => {
    const [data , setData] = useState<any>(null)
    const [name , setName] = useState<string>("")
    const [image , setImage] = useState<string>("")
    const [count , setCount] = useState<string>("")
    const [height , setHeight] = useState<string>("")
    const [width , setWidth ] = useState<string>("")
    const [weight , setWeight] = useState<string>("")
    const editOpen = useAppSelector(state=>state.modalSlice.editOpen)
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const editClick = () => {
        dispatch(setEditClose())
        console.log(editOpen)
    }

    useEffect(()=> {
        fetch(`http://localhost:3000/product/${id}`)
            .then(response=>response.json())
            .then(data => {
                setData(data);
                setName(data.name);
                setImage(data.image);
                setCount(data.count);
                setHeight(data.size.height);
                setWidth(data.size.width);
                setWeight(data.weight);
            }
            )
            .catch(error => console.log("Error fetching data:" , error))
        
    },[editOpen])

    const confirmClick = () => {
        fetch(`http://localhost:3000/product/${id}`, {
            method: "PUT",
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
                weight: weight,
                comment: [],
            }),
             })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to edit product");
                }
                console.log("Product editing successfully.");
                // Отримуємо відповідь від сервера та можливо щось робимо з нею
                return response.json();
            })
            .catch((error) => {
                console.error("Error editinf product:", error);
            });
            dispatch(setEditClose())
            console.log(editOpen)
     }
    
    
    return (
        <div className="edit-wrapper">
            <div className="edit">
            <Close onClick={editClick}/>
            {
                data!==null ? 
                (
                <>
                    <span>
                        <label htmlFor="">Edit name</label>
                        <input value={name} onChange={(event)=>setName(event.target.value)} type="text" />
                    </span>
                    <span>
                        <label htmlFor="">Edit image</label>
                        <input value={image} onChange={(event)=>setImage(event.target.value)} type="text" />
                    </span>
                    <span>
                        <label htmlFor="">Edit count of product</label>
                        <input value={count} onChange={(event)=>setCount(event.target.value)} type="text" />
                    </span>
                    <span>
                        <label htmlFor="">Edit size of product</label>
                        <label htmlFor="">Width:</label>
                        <input value={width} onChange={(event)=>setWidth(event.target.value)}type="text" />
                        <label htmlFor="">Heigth</label>
                        <input value={height} onChange={(event)=>setHeight(event.target.value)} type="text" />
                    </span>
                    <span>
                        <label htmlFor="">Edit weight of product</label>
                        <input value={weight} onChange={(event)=>setWeight(event.target.value)} type="text" />
                    </span>
                </>
                )
                :
                (<div>Loading...</div>)
            }
            <Confirm onClick={confirmClick}/>
        </div>
        </div>
    )
}

export default EditProduct