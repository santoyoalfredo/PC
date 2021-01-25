import Axios from "axios";
import React from "react";
import Table from "../table/table";
import Modal from "../modal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Devices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            devices: []
        };
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
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const headers = ['Name', 'Manufacturer', 'Model', 'Length', 'Color', 'Characteristics', 'Serial'];
        let content = this.state.devices;

        if (this.state.enabled) {
            return (
                <div className="table-responsive">
                    <Modal
                        label="Confirm Request"
                        message="Are you sure you wish to disable the module?"
                        function={this.devicesDisable.bind(this)}
                    />
                    <Table
                        classes="table-striped table-sm"
                        headers={headers}
                        content={content}
                        type="devices"
                    />
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
