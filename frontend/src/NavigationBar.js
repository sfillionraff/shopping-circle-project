import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { colors } from "./GlobalStyles";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
// import Logo from "./Logo";

const NavBar = () => {
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  return (
    <>
      {!loggedIn ? (
        <Menu>
          <MenuItem to="/">
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
      ) : accountInfo.type === "seller" ? (
        <Menu style={{ justifyContent: "space-between" }}>
          <MenuItem to="/">
            <AiOutlineHome />
          </MenuItem>
          {/* <MenuItem
            to="/selling"
            style={{ width: 40, height: 30 }}
            activeStyle={{ backgroundColor: colors.green, color: "white" }}
          >
            Sell
          </MenuItem> */}
          <MenuItem
            to="/account"
            activeStyle={{ backgroundColor: colors.green, color: "white" }}
          >
            <Image src={accountInfo.imageSrc} alt="account picture" />
          </MenuItem>
        </Menu>
      ) : (
        <Menu style={{ justifyContent: "space-between" }}>
          <MenuItem to="/">
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
            to="/cart"
            activeStyle={{ backgroundColor: colors.green, color: "white" }}
          >
            <AiOutlineShoppingCart />
          </MenuItem>
          <MenuItem
            to="/account"
            activeStyle={{ backgroundColor: colors.green, color: "white" }}
          >
            <Image src={accountInfo.imageSrc} alt="account picture" />
          </MenuItem>
        </Menu>
      )}
    </>
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

const Image = styled.img`
  height: 20px;
  border-radius: 50%;
  object-fit: contain;
`;

export default NavBar;
