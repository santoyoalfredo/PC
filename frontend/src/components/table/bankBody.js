import Button from "../buttons/button";
import Increment from "../buttons/increment";
import Decrement from "../buttons/decrement";

function BankBody(props) {
    return (
        <tbody>
            {
                props.content.map((entry, entryID) =>
                    <tr key={entryID}>
                        {
                            entry.map((attribute, attributeID) =>
                                <td key={attributeID}>{attribute}</td>
                            )}
                        <td>
                            <Increment function={props.counterUpdate.bind(this, entry[0], true)} />
                        </td>

                        <td>
                            <Decrement function={props.counterUpdate.bind(this, entry[0], false)} />
                        </td>

                    </tr>
                )
            }
            <tr>
                <td>Total</td>
                <td>${props.calculateTotal().toFixed(2)}</td>
                <td>
                    <Button
                        classes="btn btn-warning"
                        function={props.counterUndo.bind(this)}
                        text="Undo"
                    />
                </td>
                <td>
                    <Button
                        classes={"btn btn-secondary " + (props.checkCounterZero(this) && 'disabled')}
                        function={props.counterZero.bind(this)}
                        text="Zero"
                    />
                </td>
            </tr>

            <tr>
                <td colSpan="2">
                    <Button
                        classes={"btn btn-primary " + (props.checkUnsaved(this) && 'disabled')}
                        function={props.counterSave.bind(this)}
                        text="Save"
                    />
                </td>
                <td colSpan="2">
                    <div className="d-grid">
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">Disable</button>
                    </div>
                </td>
            </tr>

        </tbody>
    )
}

export default BankBody;
