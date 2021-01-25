function Body(props) {
    return (
        <tbody>
            {
                props.content.map((entry, entryID) =>
                    <tr key={entryID}>
                        {
                            entry.map((attribute, attributeID) =>
                                <td key={attributeID}>{attribute[1]}</td>
                            )}
                    </tr>
                )
            }
        </tbody>
    )
}

export default Body;
