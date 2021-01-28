import Header from "./header";
import BankBody from "./bankBody";
import DeviceBody from "./deviceBody";
import GameBody from "./gameBody";


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
                    handleEdit={props.handleEdit}
                />
            }
            {props.type === "games" &&
                <GameBody
                    content={props.content}
                    handleEdit={props.handleEdit}
                />
            }
        </table>
    );
}

export default Table;
