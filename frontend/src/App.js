import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import NavBar from "./NavigationBar";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import ShoppingHomepage from "./Shopping/ShoppingHomepage";
import SideBarSearch from "./Shopping/SideBarSearch";
import ProductDetails from "./Shopping/ProductDetails";
import SellingHomepage from "./Selling/SellingHomepage";
import SellerProfile from "./Selling/SellerProfile";
import AddNewItem from "./Selling/AddNewItem";
import UpdateItem from "./Selling/UpdateItem";
import AccountHomepage from "./Account/AccountHomepage";
import LoginAccount from "./Account/LoginAccount";
import UpdateAccount from "./Account/UpdateAccount";
import Cart from "./Cart/Cart";
import Checkout from "./Cart/Checkout";
import Success from "./Success";
import Philosophy from "./Footer/Philosophy";
import EnvironmentalImpact from "./Footer/EnviroImpact";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path="/product/:_id">
          <ProductDetails />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/products/:selectedCategory">
          <SideBarSearch />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/products">
          <ShoppingHomepage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/:_id">
          <SellerProfile />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/add">
          <AddNewItem />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/selling/update/:_id">
          <UpdateItem />
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
        <Route exact path="/success/:type">
          <Success />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/update/account">
          <UpdateAccount />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account/:action">
          <LoginAccount />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/account">
          <AccountHomepage />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/about-us">
          <Philosophy />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/environment">
          <EnvironmentalImpact />
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
