import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Profile } from "../views";

export default function MySwitch({ path }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={`/${path}`}>
        <Profile />
      </Route>
    </Switch>
  );
}
