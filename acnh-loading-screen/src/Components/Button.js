const Button = ({scene, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>{scene}</button>
    )
}

export default Button;