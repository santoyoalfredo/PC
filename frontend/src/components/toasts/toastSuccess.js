function ToastSuccess(props) {
    return (
        <div>
            <i className="bi bi-check2"></i>{" " + props.message}
        </div>
    );
}

export default ToastSuccess;
