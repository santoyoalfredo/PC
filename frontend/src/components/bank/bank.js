import Axios from "axios";
import React from "react";

class Bank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enabled: true,
            quarters: -1,
            dimes: -1,
            nickels: -1,
            pennies: -1,
            prevQuarters: -1,
            prevDimes: -1,
            prevNickels: -1,
            prevPennies: -1,
        };
    }

    componentDidMount() {

        this.counterGet();
    }

    counterGet() {
        Axios({
            method: "GET",
            url: "http://localhost:9000/api/bank",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            this.setState({
                quarters: res.data.quarters,
                dimes: res.data.dimes,
                nickels: res.data.nickels,
                pennies: res.data.pennies,
                prevQuarters: res.data.quarters,
                prevDimes: res.data.dimes,
                prevNickels: res.data.nickels,
                prevPennies: res.data.pennies,
            });
        }).catch(error => {
            console.log(error);
        });
    }

    counterUpdate(item, increment) {
        switch (item) {
            case 'quarters':
                this.setState({ quarters: this.state.quarters + (increment ? 1 : -1) });
                break;
            case 'dimes':
                this.setState({ dimes: this.state.dimes + (increment ? 1 : -1) });
                break;
            case 'nickels':
                this.setState({ nickels: this.state.nickels + (increment ? 1 : -1) });
                break;
            case 'pennies':
                this.setState({ pennies: this.state.pennies + (increment ? 1 : -1) });
                break;
            default: break;
        }
    }

    counterUndo() {
        this.setState({
            quarters: this.state.prevQuarters,
            dimes: this.state.prevDimes,
            nickels: this.state.prevNickels,
            pennies: this.state.prevPennies
        });
    }

    counterZero() {
        this.setState({ quarters: 0, dimes: 0, nickels: 0, pennies: 0 });
    }

    counterSave() {
        Axios({
            method: "PUT",
            url: "http://localhost:9000/api/bank",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                quarters: this.state.quarters,
                dimes: this.state.dimes,
                nickels: this.state.nickels,
                pennies: this.state.pennies
            }
        }).then(res => {
            this.setState({
                prevQuarters: this.state.quarters,
                prevDimes: this.state.dimes,
                prevNickels: this.state.nickels,
                prevPennies: this.state.pennies
            });
            console.log("Nice!");
        }).catch(error => {
            console.log(error);
        });
    }

    counterEnable() {
        Axios({
            method: "POST",
            url: "http://localhost:9000/api/bank",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            this.counterGet();
            this.setState({ enabled: true });
            console.log("Post!");
        }).catch(error => {
            console.log(error);
        });
    }

    counterDisable() {
        Axios({
            method: "DELETE",
            url: "http://localhost:9000/api/bank",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            this.setState({ enabled: false });
            console.log("Disabled!");
        }).catch(error => {
            console.log(error);
        });
    }

    calculateTotal() {
        return ((this.state.quarters * 25) + (this.state.dimes * 10) + (this.state.nickels * 5) + this.state.pennies) / 100;
    }

    checkCounterZero() {
        return (this.state.quarters === 0 && this.state.dimes === 0 && this.state.nickels === 0 && this.state.pennies === 0);
    }

    checkUnsaved() {
        return (this.state.quarters === this.state.prevQuarters && this.state.dimes === this.state.prevDimes && this.state.nickels === this.state.prevNickels & this.state.pennies === this.state.prevPennies);
    }

    render() {
        if (this.state.enabled) {
            return (
                <div className="col-md-4">
                    <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="confirmModalLabel">Confirm Request</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you wish to disable the module?
                            </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.counterDisable.bind(this)}>Yes</button>
                                    <button type="button" className="btn btn-primary">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-light table-bordered align-middle">
                        <tbody>
                            <tr>
                                <td>Quarters</td>
                                <td>{this.state.quarters}</td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'quarters', true)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className={"btn btn-danger " + (this.state.quarters === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'quarters', false)}>-</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Dimes</td>
                                <td>{this.state.dimes}</td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'dimes', true)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className={"btn btn-danger " + (this.state.dimes === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'dimes', false)}>-</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Nickels</td>
                                <td>{this.state.nickels}</td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'nickels', true)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className={"btn btn-danger " + (this.state.nickels === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'nickels', false)}>-</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pennies</td>
                                <td>{this.state.pennies}</td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'pennies', true)}>+</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className={"btn btn-danger " + (this.state.pennies === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'pennies', false)}>-</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>${this.calculateTotal().toFixed(2)}</td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-warning" onClick={this.counterUndo.bind(this)}>Undo</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-grid">
                                        <button type="button" className={"btn btn-secondary " + (this.checkCounterZero(this) && 'disabled')} onClick={this.counterZero.bind(this)}>Zero</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <div className="d-grid">
                                        <button type="button" className={"btn btn-primary " + (this.checkUnsaved(this) && 'disabled')} onClick={this.counterSave.bind(this)}>Save</button>
                                    </div>
                                </td>
                                <td colSpan="2">
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmModal">Disable</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.counterEnable.bind(this)}>Enable</button>
                </div>
            );
        }

    }
}

export default Bank;
