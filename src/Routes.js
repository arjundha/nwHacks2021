import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/Containers/Home";
import TEST from "../src/Containers/TEST"
import AddTime from "../src/Containers/AddTime"
import AboutUs from "../src/Containers/AboutUs"
import WheresTheFuckingBook from "../src/Containers/Book"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/test">
        <TEST />
      </Route>
      <Route exact path="/add">
        <AddTime />
      </Route>
      <Route exact path="/about">
        <AboutUs />
      </Route>
      <Route exact path="/book">
        <WheresTheFuckingBook />
      </Route>
    </Switch>
  );
}