function GameModal(props) {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby={props.id + "Label"} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.id + "Label"}>{props.label}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form name="deviceForm" className="row">
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input type="name" name="name" className="form-control" id="nameInput" aria-describedby="nameHelp" value={props.name} onChange={props.handleChange}></input>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="platformInput" className="form-label">Platform</label>
                                <select className="form-select mb-3 col-5" name="platform" aria-label="Platform" value={props.platform} onChange={props.handleChange}>
                                    <option>Select a platform</option>
                                    <option value="nintendo3ds">Nintendo 3DS</option>
                                    <option value="nintendoSwitch">Nintendo Switch</option>
                                    <option value="pc">PC</option>
                                    <option value="ps4">PS4</option>
                                    <option value="ps5">PS5</option>
                                    <option value="steam">Steam</option>
                                    <option value="xboxGamePass">Xbox Game Pass</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="genreInput" className="form-label">Genre</label>
                                <select className="form-select mb-3 col-5" name="genre" aria-label="Genre" value={props.genre} onChange={props.handleChange}>
                                    <option>Select a genre</option>
                                    <option value="Action">Action</option>
                                    <option value="Narrative">Narrative</option>
                                    <option value="Racing">Racing</option>
                                    <option value="Rhythm">Rhythm</option>
                                    <option value="RPG">RPG</option>
                                    <option value="Simulation">Simulation</option>
                                    <option value="Sports">Sports</option>
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="formatInput" className="form-label">Format</label>
                                <select className="form-select mb-3 col-5" name="format" aria-label="Format" value={props.format} onChange={props.handleChange}>
                                    <option>Select a format</option>
                                    <option value="Digital">Digital</option>
                                    <option value="Physical">Physical</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="statusInput" className="form-label">Status</label>
                                <select className="form-select mb-3 col-6" name="status" aria-label="Status" value={props.status} onChange={props.handleChange}>
                                    <option>Select a status</option>
                                    <option value="paused">Paused</option>
                                    <option value="playing">Playing</option>
                                    <option value="standby">Standby</option>
                                    <option value="unreleased">Unreleased</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="notesInput" className="form-label">Notes</label>
                                <textarea type="notes" name="notes" className="form-control" id="notesInput" aria-describedby="notesHelp" value={props.notes} onChange={props.handleChange}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.handleSubmit}>
                            {(props.id === "addModal") ? "Add" : "Update"}
                        </button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameModal;
