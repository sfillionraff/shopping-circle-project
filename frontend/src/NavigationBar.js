import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "./GlobalStyles";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <Menu>
      <MenuItem to="/">
        <AiOutlineHome />
      </MenuItem>
      <MenuItem
        to="/products"
        activeStyle={{ backgroundColor: colors.green, color: "white" }}
      >
        Shop
      </MenuItem>
      <MenuItem
        to="/selling"
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
  /* position: absolute; */
  display: flex;
  justify-content: space-evenly;
  /* width: 50vh; */
`;

const MenuItem = styled(NavLink)`
  list-style: none;
  color: ${colors.green};
  text-decoration: none;
`;

export default NavBar;
