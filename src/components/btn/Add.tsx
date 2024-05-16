import "./btn.css"

const Add = ({addClick}: { addClick: () => void }) => {
    return (
        <span onClick={addClick} className="add"></span>
    )
}

export default Add