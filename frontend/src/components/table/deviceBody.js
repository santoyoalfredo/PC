import ColorBadge from "../colorBadges/colorBadge";
import { CapitalizeFirstLetter } from "../../lib/strings";

function DeviceBody(props) {
    return (
        <tbody className="devices">
            {
                props.content.map((entry) =>
                    <tr key={entry.id}>
                        <td>
                            <button type="button" className="btn btn-sm btn-primary" onClick={props.handleEdit.bind(this, entry)} data-bs-toggle="modal" data-bs-target="#editModal">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={props.handleEdit.bind(this, entry)} data-bs-toggle="modal" data-bs-target="#deleteModal">
                                <i class="bi bi-x-square"></i>
                            </button>
                        </td>
                        <td>{entry.name}</td>
                        <td>{entry.manufacturer}</td>
                        <td>{entry.model}</td>
                        {
                            (entry.length === 0) ? <td>-</td> : <td>{entry.length}</td>
                        }
                        <td>
                            <ColorBadge class={entry.primaryColor} data={CapitalizeFirstLetter(entry.primaryColor)} />
                            {
                                (entry.secondaryColor) && <ColorBadge class={entry.secondaryColor} data={CapitalizeFirstLetter(entry.secondaryColor)} />
                            }
                        </td>
                        <td>{entry.characteristics}</td>
                        <td>{entry.serial}</td>
                    </tr>
                )
            }
        </tbody>
    )
}

export default DeviceBody;
