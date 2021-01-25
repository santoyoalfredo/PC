import Header from "./header";
import DeviceBody from "./deviceBody";
import BankBody from "./bankBody";

function Table(props) {
    let content = [];
    if (props.type === "bank")
        content = Object.entries(props.content);

    return (
        <table className={"table table-light table-bordered align-middle " + props.classes}>
            <Header
                headers={props.headers}
                type={props.type}
            />
            {props.type === "bank" &&
                <BankBody
                    content={content}
                    counterUpdate={props.counterUpdate}
                    calculateTotal={props.calculateTotal}
                    counterUndo={props.counterUndo}
                    checkCounterZero={props.checkCounterZero}
                    counterZero={props.counterZero}
                    checkUnsaved={props.checkUnsaved}
                    counterSave={props.counterSave}
                />
            }
            {props.type === "devices" &&
                <DeviceBody
                    content={props.content}
                />
            }
        </table>
    );
}

export default Table;
