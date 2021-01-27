import ColorBadge from "../colorBadge";

function DeviceBody(props) {
    return (
        <tbody>
            {
                props.content.map((entry) =>
                    <tr key={entry.id}>
                        <td>
                            <button type="button" className="btn btn-primary" onClick={props.handleEdit.bind(this, entry)} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                            <button type="button" className="btn btn-danger">X</button>
                        </td>
                        <td>{entry.name}</td>
                        <td>{entry.manufacturer}</td>
                        <td>{entry.model}</td>
                        {
                            (entry.length === 0) ? <td>-</td> : <td>{entry.length}</td>
                        }
                        <td>
                            <ColorBadge color={entry.primaryColor} />
                            {
                                (entry.secondaryColor) && <ColorBadge color={entry.secondaryColor} />
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
