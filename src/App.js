import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from "./navbar/Navbar";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <div>
                    <h1>Merhaba</h1>
                </div>
                <Switch>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

