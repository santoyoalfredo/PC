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
            <div class="container-fluid">
                <div class="row">
                    <Sidebar />
                    <div class="main col-md-9 col-lg-10 ms-sm-auto">
                        <Switch>
                            {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
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
