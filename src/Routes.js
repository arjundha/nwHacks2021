import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../src/Containers/Home";
import TEST from "../src/Containers/TEST"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/test">
        <TEST />
      </Route>
    </Switch>
  );
}