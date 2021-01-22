import Button from "./button";

function Increment(props) {
    return (
        <Button
            classes="btn btn-success"
            function={props.function}
            text="+"
        />
    );
}

export default Increment;
