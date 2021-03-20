import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "./GlobalStyles";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
// import Logo from "./Logo";

const NavBar = () => {
  return (
    <Menu>
      <MenuItem
        to="/"
        // activeStyle={{ backgroundColor: colors.green, color: "white" }}
      >
        <AiOutlineHome />
      </MenuItem>
      <MenuItem
        to="/products"
        style={{ width: 50, height: 30 }}
        activeStyle={{ backgroundColor: colors.green, color: "white" }}
      >
        Shop
      </MenuItem>
      <MenuItem
        to="/selling"
        style={{ width: 40, height: 30 }}
        activeStyle={{ backgroundColor: colors.green, color: "white" }}
      >
        Sell
      </MenuItem>
      {/* insert logo here: circle with green that says shopping circle */}
      {/* insert search bar here */}
      <MenuItem
        to="/cart"
        activeStyle={{ backgroundColor: colors.green, color: "white" }}
      >
        <AiOutlineShoppingCart />
      </MenuItem>
      <MenuItem
        to="/account"
        activeStyle={{ backgroundColor: colors.green, color: "white" }}
      >
        <RiAccountCircleLine />
      </MenuItem>
    </Menu>
  );
};

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;

const MenuItem = styled(NavLink)`
  list-style: none;
  color: ${colors.green};
  text-decoration: none;
  font-size: 16pt;
`;

export default NavBar;
