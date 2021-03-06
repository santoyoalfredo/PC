import './App.css';
import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';
import { ToastContainer } from 'react-toastify';
import Bank from './components/bank/bank';
import Devices from './components/devices/devices';
import Games from './components/games/games';
import WIP from './components/wip';

function App() {

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="main col-md-9 col-lg-10 ms-sm-auto p-3">
                        <ToastContainer />
                        <Switch>
                            <Route path="/bank">
                                <Bank />
                            </Route>
                            <Route path="/devices">
                                <Devices />
                            </Route>
                            <Route path="/games">
                                <Games />
                            </Route>
                            <Route path="/">
                                <WIP />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
