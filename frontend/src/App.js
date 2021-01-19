import './App.css';
import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Navbar from './components/navigation/navbar';
import Sidebar from './components/navigation/sidebar';
import Bank from './components/bank/bank';
import WIP from './components/wip';

function App() {

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="main col-md-9 col-lg-10 ms-sm-auto p-3">
                        <Switch>
                            <Route path="/bank">
                                <Bank />
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
