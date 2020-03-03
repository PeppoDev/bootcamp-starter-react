import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Main from "./pages/Main";
import Product from "./pages/Product";

// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
