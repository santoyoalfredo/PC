function DeviceModal(props) {
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
                            <div className="mb-3 col-md-4">
                                <label htmlFor="manufacturerInput" className="form-label">Manufacturer</label>
                                <input type="manufacturer" name="manufacturer" className="form-control" id="manufacturerInput" aria-describedby="manufacturerHelp" value={props.manufacturer} onChange={props.handleChange}></input>
                            </div>
                            <div className="mb-3 col-md-8">
                                <label htmlFor="modelInput" className="form-label">Model</label>
                                <input type="model" name="model" className="form-control" id="modelInput" aria-describedby="modelHelp" value={props.model} onChange={props.handleChange}></input>
                            </div>
                            <div className="mb-3 col-md-2">
                                <label htmlFor="lengthInput" className="form-label">Length</label>
                                <input type="length" name="length" className="form-control" id="lengthInput" aria-describedby="lengthHelp" value={props.length} onChange={props.handleChange}></input>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="colorInput1" className="form-label">Color 1</label>
                                <select className="form-select mb-3 col-5" name="primaryColor" aria-label="Color 1" value={props.primaryColor} onChange={props.handleChange}>
                                    <option>Select a color</option>
                                    <option className="blue" value="blue">Blue</option>
                                    <option className="indigo" value="indigo">Indigo</option>
                                    <option className="purple" value="purple">Purple</option>
                                    <option className="pink" value="pink">Pink</option>
                                    <option className="red" value="red">Red</option>
                                    <option className="orange" value="orange">Orange</option>
                                    <option className="yellow" value="yellow">Yellow</option>
                                    <option className="green" value="green">Green</option>
                                    <option className="teal" value="teal">Teal</option>
                                    <option className="cyan" value="cyan">Cyan</option>
                                    <option className="white" value="white">White</option>
                                    <option className="gray" value="gray">Gray</option>
                                    <option className="black" value="black">Black</option>
                                    <option className="clear" value="clear">Clear</option>
                                </select>
                            </div>
                            <div className="col-md-5">
                                <label htmlFor="colorsInput2" className="form-label">Color 2</label>
                                <select className="form-select mb-3 col-5" name="secondaryColor" aria-label="Color 2" value={props.secondaryColor} onChange={props.handleChange}>
                                    <option>Select a color</option>
                                    <option className="blue" value="blue">Blue</option>
                                    <option className="indigo" value="indigo">Indigo</option>
                                    <option className="purple" value="purple">Purple</option>
                                    <option className="pink" value="pink">Pink</option>
                                    <option className="red" value="red">Red</option>
                                    <option className="orange" value="orange">Orange</option>
                                    <option className="yellow" value="yellow">Yellow</option>
                                    <option className="green" value="green">Green</option>
                                    <option className="teal" value="teal">Teal</option>
                                    <option className="cyan" value="cyan">Cyan</option>
                                    <option className="white" value="white">White</option>
                                    <option className="gray" value="gray">Gray</option>
                                    <option className="black" value="black">Black</option>
                                    <option className="clear" value="clear">Clear</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="characteristicsInput" className="form-label">Characteristics</label>
                                <textarea type="characteristics" name="characteristics" className="form-control" id="characteristicsInput" aria-describedby="characteristicsHelp" value={props.characteristics} onChange={props.handleChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="serialInput" className="form-label">Serial</label>
                                <input type="serial" name="serial" className="form-control" id="serialInput" aria-describedby="serialHelp" value={props.serial} onChange={props.handleChange}></input>
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

export default DeviceModal;
