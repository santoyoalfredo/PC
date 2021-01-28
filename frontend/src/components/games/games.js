import Axios from "axios";
import React from "react";
import Table from "../table/table";
import GameModal from "../modal/gameModal";
import ConfirmModal from "../modal/confirmModal";
import { toastSuccess, toastError } from "../toasts/toastManager";

class Games extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            id: 0,
            name: "",
            platform: "",
            genre: "",
            format: 0,
            status: "",
            notes: "",
            games: []
        };
        this.clearState = this.clearState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.gamesAdd = this.gamesAdd.bind(this);
        this.gamesEdit = this.gamesEdit.bind(this);
        this.gamesDelete = this.gamesDelete.bind(this);
    }

    clearState() {
        this.setState({
            name: "",
            platform: "",
            genre: "",
            format: "",
            status: "",
            notes: "",
        }, () => console.log(this.state));

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(name + " = " + value);
    }

    handleEdit(entry) {
        this.setState({
            id: entry.id,
            name: entry.name,
            platform: entry.platform,
            genre: entry.genre,
            format: entry.format,
            status: entry.status,
            notes: entry.notes,
        });
    }

    componentDidMount() {
        this.gamesGet();
    }

    gamesGet() {
        Axios({
            method: "GET",
            url: "http://localhost:9000/api/games",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            this.setState({
                games: res.data,
            });
            console.log(this.state.games);
        }).catch(error => {
            console.log(error);
        });
    }

    gamesAdd() {
        Axios({
            method: "POST",
            url: "http://localhost:9000/api/games/",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                name: this.state.name,
                platform: this.state.platform,
                genre: this.state.genre,
                format: this.state.format,
                status: this.state.status,
                notes: this.state.notes,
            }
        }).then(res => {
            console.log("Saved!");
            toastSuccess('Game saved!');
            this.gamesGet();
        }).catch(error => {
            console.log(error);
            toastError('Uh oh! Game was unable to be saved!');
        });
    }

    gamesEdit() {
        const id = this.state.id;

        Axios({
            method: "PUT",
            url: "http://localhost:9000/api/games/" + id,
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                name: this.state.name,
                platform: this.state.platform,
                genre: this.state.genre,
                format: this.state.format,
                status: this.state.status,
                notes: this.state.notes,
            }
        }).then(res => {
            console.log("Saved!");
            this.gamesGet();
            toastSuccess('Game updated!');
        }).catch(error => {
            console.log(error);
            toastError('Uh oh! Game was unable to be updated!');
        });
    }

    gamesDelete() {
        const id = this.state.id;

        Axios({
            method: "DELETE",
            url: "http://localhost:9000/api/games/" + id,
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            console.log("Deleted!");
            this.gamesGet();
            toastSuccess('Game deleted!');
        }).catch(error => {
            console.log(error);
            toastError('Uh oh! Game was unable to be deleted!');
        });
    }

    gamesEnable() {
        Axios({
            method: "GET",
            url: "http://localhost:9000/api/games",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            this.gamesGet();
            this.setState({ enabled: true });
        }).catch(error => {
            console.log(error);
        });
    }

    gamesDisable() {
        Axios({
            method: "DELETE",
            url: "http://localhost:9000/api/games",
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
        const headers = ['', 'Name', 'Platform', 'Genre', 'Format', 'Status', 'Notes'];
        let content = this.state.games;

        if (this.state.enabled) {
            return (
                <div>
                    <ConfirmModal
                        id="confirmModal"
                        label="Confirm Request"
                        message="Are you sure you wish to disable the module?"
                        function={this.devicesDisable}
                    />
                    <GameModal
                        id="addModal"
                        label="Add Game"
                        name={this.state.name}
                        platform={this.state.platform}
                        genre={this.state.genre}
                        format={this.state.format}
                        status={this.state.status}
                        notes={this.state.notes}
                        handleSubmit={this.gamesAdd}
                        handleChange={this.handleChange}
                    />
                    <GameModal
                        id="editModal"
                        label="Edit Game"
                        name={this.state.name}
                        platform={this.state.platform}
                        genre={this.state.genre}
                        format={this.state.format}
                        status={this.state.status}
                        notes={this.state.notes}
                        handleSubmit={this.gamesEdit}
                        handleChange={this.handleChange}
                    />
                    <ConfirmModal
                        id="deleteModal"
                        label="Delete Game"
                        message={"Are you sure you wish to delete " + this.state.name + "?"}
                        function={this.gamesDelete}
                    />
                    <div className="p-2 row">
                        <button type="button" className="btn btn-primary col-md-2" data-bs-toggle="modal" data-bs-target="#addModal" onClick={this.clearState}>Add Game</button>
                        {/* <button type="button" class="col-2 btn btn-danger">Disable</button> */}
                    </div>
                    <div className="table-responsive-md">
                        <Table
                            classes="table-sm"
                            headers={headers}
                            content={content}
                            type="games"
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.gamesEnable.bind(this)}>Enable</button>
                </div>
            );
        }

    }
}

export default Games;
