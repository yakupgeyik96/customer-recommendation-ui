import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Slider from "./components/Slider";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/profil" exact component={Slider} />
          <Route path="/firsatlar" />
          <Route path="/hakkimizda" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
