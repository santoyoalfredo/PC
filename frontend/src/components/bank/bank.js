import Axios from "axios";
import React from "react";

class Bank extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quarters: -1, dimes: -1, nickels: -1, pennies: -1 };
    }

    componentDidMount() {

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
                pennies: res.data.pennies
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

    counterClear() {
        this.setState({ quarters: 0, dimes: 0, nickels: 0, pennies: 0 });
    }

    calculateTotal() {
        return ((this.state.quarters * 25) + (this.state.dimes * 10) + (this.state.nickels * 5) + this.state.pennies) / 100;
    }

    render() {
        return (
            <div class="col-md-4">
                <table class="table table-light table-bordered align-middle">
                    <tbody>
                        <tr>
                            <td>Quarters</td>
                            <td>{this.state.quarters}</td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'quarters', true)}>+</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className={"btn btn-danger " + (this.state.quarters === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'quarters', false)}>-</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Dimes</td>
                            <td>{this.state.dimes}</td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'dimes', true)}>+</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className={"btn btn-danger " + (this.state.dimes === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'dimes', false)}>-</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Nickels</td>
                            <td>{this.state.nickels}</td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'nickels', true)}>+</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className={"btn btn-danger " + (this.state.nickels === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'nickels', false)}>-</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Pennies</td>
                            <td>{this.state.pennies}</td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className="btn btn-success" onClick={this.counterUpdate.bind(this, 'pennies', true)}>+</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" className={"btn btn-danger " + (this.state.pennies === 0 && 'disabled')} onClick={this.counterUpdate.bind(this, 'pennies', false)}>-</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${this.calculateTotal()}</td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" class="btn btn-primary">Save</button>
                                </div>
                            </td>
                            <td>
                                <div class="d-grid">
                                    <button type="button" class="btn btn-secondary" onClick={this.counterClear.bind(this)}>Clear</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Bank;
