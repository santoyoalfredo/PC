function ColorBadge(props) {
    return (
        <span class={"badge " + (" " && props.color)}>{props.color}</span>
    );
}

export default ColorBadge;
