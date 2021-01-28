function Header(props) {
    if (props.type !== 'bank') {
        return (
            <thead>
                <tr>
                    {
                        props.headers.map((header, headerID) =>
                            <th key={headerID}>{header}</th>
                        )
                    }
                </tr>
            </thead>
        );
    }
    else
        return null;
}

export default Header;
