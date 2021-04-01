import React from "react";
import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

import { colors } from "../GlobalStyles";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

const LoginAccount = () => {
  const { action } = useParams();
  return (
    <Container>
      <Span>
        <StyledLink
          to="/account/login"
          activeStyle={{
            color: colors.green,
            textDecoration: "underline",
            textDecorationColor: colors.green,
          }}
        >
          Login
        </StyledLink>
        <StyledLink
          to="/account/create"
          activeStyle={{
            color: colors.green,
            textDecoration: "underline",
            textDecorationColor: colors.green,
          }}
        >
          Create Account
        </StyledLink>
      </Span>
      {action === "login" ? <Login /> : <CreateAccount />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 10%;
  left: 45%;
  width: 200px;
  height: 300px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding-left: 5px;
  padding-right: 5px;
  color: white;
`;

const Span = styled.span`
  height: 150px;
`;

export default LoginAccount;
