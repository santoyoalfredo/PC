function ToastError(props) {
    return (
        <div>
            <i class="bi bi-exclamation-circle"></i>{" " + props.message}
        </div>
    );
}

export default ToastError;
