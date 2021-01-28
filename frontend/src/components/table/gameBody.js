import GameBadge from "../colorBadges/gameBadge";
import StatusManager from "../games/statusManager";
import { CapitalizeFirstLetter } from "../../lib/strings";

function GameBody(props) {
    return (
        <tbody className="games">
            {
                props.content.map((entry) =>
                    <tr key={entry.id} className={StatusManager(entry.status)}>
                        <td className="col-md-1">
                            <button type="button" className="btn btn-sm btn-primary" onClick={props.handleEdit.bind(this, entry)} data-bs-toggle="modal" data-bs-target="#editModal">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={props.handleEdit.bind(this, entry)} data-bs-toggle="modal" data-bs-target="#deleteModal">
                                <i class="bi bi-x-square"></i>
                            </button>
                        </td>
                        <td className="col-md-3">{entry.name}</td>
                        <td className="col-md-1">{GameBadge(entry.platform)}</td>
                        <td className="col-md-1">{entry.genre}</td>
                        <td className="col-md-1">{entry.format}</td>
                        <td className="col-md-1">{CapitalizeFirstLetter(entry.status)}</td>
                        <td>{entry.notes}</td>
                    </tr>
                )
            }
        </tbody>
    )
}

export default GameBody;
