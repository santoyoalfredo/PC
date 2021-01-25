import ColorBadge from "../colorBadge";

function DeviceBody(props) {
    return (
        <tbody>
            {
                props.content.map((entry) =>
                    <tr key={entry.id}>
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
