function ToastError(props) {
    return (
        <div>
            <i className="bi bi-exclamation-circle"></i>{" " + props.message}
        </div>
    );
}

export default ToastError;
