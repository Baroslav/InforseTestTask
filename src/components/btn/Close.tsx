import "./btn.css"

const Close = ({onClick}: { onClick: () => void }) => {
    return (
        <span className="close" onClick={onClick}></span>
    )
}

export default Close