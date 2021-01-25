function ColorBadge(props) {
    return (
        <span className={"badge " + (" " && props.color)}>{props.color}</span>
    );
}

export default ColorBadge;
