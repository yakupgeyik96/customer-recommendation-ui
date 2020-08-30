import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                   <Route path="/"></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

