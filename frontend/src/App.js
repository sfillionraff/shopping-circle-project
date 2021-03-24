import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./NavigationBar";
import Footer from "./Footer";
import Homepage from "./Homepage/Homepage";
import ShoppingHomepage from "./Shopping/ShoppingHomepage";
import ProductDetails from "./Shopping/ProductDetails";
import SellingHomepage from "./Selling/SellingHomepage";
import AddNewItem from "./Selling/AddNewItem";
import CreateAccount from "./Account/CreateAccount";
import AccountHomepage from "./Account/AccountHomepage";
import Login from "./Account/Login";
import Cart from "./Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path="/products/:_id">
          <ProductDetails />
        </Route>
      </Switch>
      {/* <Switch>
        <Route exact path="/products/category?type=category">
          <ShoppingHomepage />
        </Route>
      </Switch> */}
      <Switch>
        <Route exact path="/products">
          <ShoppingHomepage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/add_new">
          <h1>adding an item for sale</h1>
          <AddNewItem />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/update">
          <h1>update item for sale</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling">
          <SellingHomepage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/cart">
          <Cart />
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
          <CreateAccount />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account/update">
          <h1>update account information page</h1>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account/login">
          <Login />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account">
          <AccountHomepage />
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
