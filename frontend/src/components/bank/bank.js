import Axios from "axios";
import React from "react";
import Table from "../table/table";
import ConfirmModal from "../modal/confirmModal";
import { toastSuccess } from "../toasts/toastManager";

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
        this.counterUpdate = this.counterUpdate.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.counterUndo = this.counterUndo.bind(this);
        this.checkCounterZero = this.checkCounterZero.bind(this);
        this.counterZero = this.counterZero.bind(this);
        this.counterSave = this.counterSave.bind(this);
        this.checkUnsaved = this.checkUnsaved.bind(this);
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
        switch (item.toLowerCase()) {
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
            console.log("Saved!");
            toastSuccess("Bank saved!");

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
        const headers = ['Quarters', 'Dimes', 'Nickels', 'Pennies'];
        let content = {
            Quarters: this.state.quarters,
            Dimes: this.state.dimes,
            Nickels: this.state.nickels,
            Pennies: this.state.pennies
        }

        if (this.state.enabled) {
            return (
                <div className="col-md-4">
                    <ConfirmModal
                        id="confirmModal"
                        label="Confirm Request"
                        message="Are you sure you wish to disable the module?"
                        function={this.counterDisable.bind(this)}
                    />
                    <Table
                        type="bank"
                        headers={headers}
                        content={content}
                        counterUpdate={this.counterUpdate}
                        calculateTotal={this.calculateTotal}
                        counterUndo={this.counterUndo}
                        checkCounterZero={this.checkCounterZero}
                        counterZero={this.counterZero}
                        checkUnsaved={this.checkUnsaved}
                        counterSave={this.counterSave}
                    />
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
