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
            <Redirect to="/sana-ozel" />{" "}
            {/* ilk girişte profil sayfasına yönlendirme yap */}
          </Route>
          <Route path="/sana-ozel" exact component={Body} />{" "}
          {/* Profil sayfasına yönlendir */}
          <Route path="/firsatlar" /> {/* Fırsatlar sayfasına yönlendir */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
