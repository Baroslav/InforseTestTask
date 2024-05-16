import "./btn.css"

const Cancle = ({onClick} : {onClick : () => void}) => {
    return (
        <button onClick={onClick} className="cancle">cancle</button>
    )
}

export default Cancle