import Axios from "axios";
import React from "react";
import Table from "../table/table";
import DeviceModal from "../modal/deviceModal";
import ConfirmModal from "../modal/confirmModal";
import { toastSuccess, toastError } from "../toasts/toastManager";

class Devices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            id: 0,
            name: "",
            manufacturer: "",
            model: "",
            length: 0,
            primaryColor: "",
            secondaryColor: "",
            characteristics: "",
            serial: "",
            devices: []
        };
        this.clearState = this.clearState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.devicesAdd = this.devicesAdd.bind(this);
        this.devicesEdit = this.devicesEdit.bind(this);
        this.devicesDelete = this.devicesDelete.bind(this);
    }

    clearState() {
        this.setState({
            name: "",
            manufacturer: "",
            model: "",
            length: 0,
            primaryColor: "",
            secondaryColor: "",
            characteristics: "",
            serial: "",
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleEdit(entry) {
        this.setState({
            id: entry.id,
            name: entry.name,
            manufacturer: entry.manufacturer,
            model: entry.model,
            length: entry.length,
            primaryColor: entry.primaryColor,
            secondaryColor: entry.secondaryColor,
            characteristics: entry.characteristics,
        });
    }

    componentDidMount() {
        this.devicesGet();
    }

    devicesGet() {
        Axios({
            method: "GET",
            url: "http://localhost:9000/api/devices",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            this.setState({
                devices: res.data,
            });
        }).catch(error => {
            console.log(error);
        });
    }

    devicesAdd() {
        Axios({
            method: "POST",
            url: "http://localhost:9000/api/devices/",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                name: this.state.name,
                manufacturer: this.state.manufacturer,
                model: this.state.model,
                length: this.state.length,
                primaryColor: this.state.primaryColor,
                secondaryColor: this.state.secondaryColor,
                characteristics: this.state.characteristics,
                serial: this.state.serial,
            }
        }).then(res => {
            console.log("Saved!");
            toastSuccess('Device saved!');
            this.devicesGet();
        }).catch(error => {
            console.log(error);
            toastError('Uh oh! Device was unable to be saved!');
        });
    }

    devicesEdit() {
        const id = this.state.id;

        Axios({
            method: "PUT",
            url: "http://localhost:9000/api/devices/" + id,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                name: this.state.name,
                manufacturer: this.state.manufacturer,
                model: this.state.model,
                length: this.state.length,
                primaryColor: this.state.primaryColor,
                secondaryColor: this.state.secondaryColor,
                characteristics: this.state.characteristics,
                serial: this.state.serial,
            }
        }).then(res => {
            console.log("Saved!");
            this.devicesGet();
            toastSuccess('Device updated!');
        }).catch(error => {
            console.log(error);
            toastError('Uh oh! Device was unable to be updated!');
        });
    }

    devicesDelete() {
        const id = this.state.id;

        Axios({
            method: "DELETE",
            url: "http://localhost:9000/api/devices/" + id,
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            console.log("Deleted!");
            this.devicesGet();
            toastSuccess('Device deleted!');
        }).catch(error => {
            console.log(error);
            toastError('Uh oh! Device was unable to be deleted!');
        });
    }

    devicesEnable() {
        Axios({
            method: "GET",
            url: "http://localhost:9000/api/devices",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            this.devicesGet();
            this.setState({ enabled: true });
        }).catch(error => {
            console.log(error);
        });
    }

    devicesDisable() {
        Axios({
            method: "DELETE",
            url: "http://localhost:9000/api/devices",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            this.setState({ enabled: false });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const headers = ['', 'Name', 'Manufacturer', 'Model', 'Length', 'Color', 'Notes', 'Serial'];
        let content = this.state.devices;

        if (this.state.enabled) {
            return (
                <div>
                    <ConfirmModal
                        id="confirmModal"
                        label="Confirm Request"
                        message="Are you sure you wish to disable the module?"
                        function={this.devicesDisable}
                    />
                    <DeviceModal
                        id="addModal"
                        label="Add Device"
                        name={this.state.name}
                        manufacturer={this.state.manufacturer}
                        model={this.state.model}
                        length={this.state.length}
                        primaryColor={this.state.primaryColor}
                        secondaryColor={this.state.secondaryColor}
                        characteristics={this.state.characteristics}
                        serial={this.state.serial}
                        handleSubmit={this.devicesAdd}
                        handleChange={this.handleChange}
                    />
                    <DeviceModal
                        id="editModal"
                        label="Edit Device"
                        name={this.state.name}
                        manufacturer={this.state.manufacturer}
                        model={this.state.model}
                        length={this.state.length}
                        primaryColor={this.state.primaryColor}
                        secondaryColor={this.state.secondaryColor}
                        characteristics={this.state.characteristics}
                        serial={this.state.serial}
                        handleSubmit={this.devicesEdit}
                        handleChange={this.handleChange}
                    />
                    <ConfirmModal
                        id="deleteModal"
                        label="Delete Device"
                        message={"Are you sure you wish to delete " + this.state.name + "?"}
                        function={this.devicesDelete}
                    />
                    <div className="p-2 row">
                        <button type="button" className="btn btn-primary col-md-2" data-bs-toggle="modal" data-bs-target="#addModal" onClick={this.clearState}>Add Device</button>
                        {/* <button type="button" class="col-2 btn btn-danger">Disable</button> */}
                    </div>
                    <div className="table-responsive-md">
                        <Table
                            classes="table-striped table-sm"
                            headers={headers}
                            content={content}
                            type="devices"
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.devicesEnable.bind(this)}>Enable</button>
                </div>
            );
        }

    }
}

export default Devices;
