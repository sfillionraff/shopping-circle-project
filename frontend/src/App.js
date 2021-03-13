import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./NavigationBar";
import Footer from "./Footer";
import Homepage from "./Homepage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path="/products/_id">
          <h1>product detail page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/products">
          <h1>product grid page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/add_new">
          <h1>adding an item for sale</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/update">
          <h1>update item for sale</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling">
          <h1>selling homepage</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/cart">
          <h1>cart</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/checkout/confirmation">
          <h1>purchase confirmation</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/checkout">
          <h1>checkout</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account/add_new">
          <h1>create an account page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account/update">
          <h1>update account information page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account">
          <h1>account page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// navbar + logo
// create context to store products and users
