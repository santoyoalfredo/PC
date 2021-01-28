function ColorBadge(props) {
    return (
        <span className={"badge " + (" " && props.class)}>{props.data}</span>
    );
}

export default ColorBadge;
