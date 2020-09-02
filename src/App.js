import React from "react";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Body from "./components/Body";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/profil" />{" "}
            {/* ilk girişte profil sayfasına yönlendirme yap */}
          </Route>
          <Route path="/profil" exact component={Body} />{" "}
          {/* Profil sayfasına yönlendir */}
          <Route path="/firsatlar" /> {/* Fırsatlar sayfasına yönlendir */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
