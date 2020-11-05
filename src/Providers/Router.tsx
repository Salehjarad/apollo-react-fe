import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Settings from "../components/Settings";
import AddForm from "../components/from/Form";

const AppRoutes: React.FC<{}> = (props) => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/add" exact component={AddForm} />
    </Switch>
  </Router>
);

export default AppRoutes;
