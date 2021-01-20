import Button from "./button";

function Decrement(props) {
    return (
        <Button
            classes="btn btn-danger"
            function={props.function}
            text="-"
        />
    );
}

export default Decrement;
