function Button(props) {
    return (
        <div className="d-grid">
            <button type="button" className={props.classes} onClick={props.function}>{props.text}</button>
        </div>
    );
}

export default Button;
