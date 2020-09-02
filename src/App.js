import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Slider from "./components/Slider";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Slider />
        </div>
        <Switch></Switch>
      </BrowserRouter>
    );
  }
}

export default App;
