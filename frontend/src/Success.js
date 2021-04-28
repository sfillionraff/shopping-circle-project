import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const Success = () => {
  const { type } = useParams();

  return (
    <Container>
      {type === "purchase" ? (
        <>
          <h1>Thank you for your order</h1>
          <p>You will receive an order confirmation shortly</p>
        </>
      ) : type === "product" ? (
        <>
          <h1>Item has been added!</h1>
          <p>
            Go to <StyledLink to="/">Home</StyledLink> to see all your items for
            sale
          </p>
        </>
      ) : type === "update-account" ? (
        <>
          <h1>Your account has been updated!</h1>
          <p>
            Go to <StyledLink to="/">Home</StyledLink> to see all your items for
            sale
          </p>
        </>
      ) : type === "delete-account" ? (
        <>
          <h1>Your account has been deleted!</h1>
          <p>
            Go to <StyledLink to="/account/create">Create Account</StyledLink>{" "}
            to make a new account!
          </p>
        </>
      ) : type === "update-item" ? (
        <>
          <h1>Item has been updated!</h1>
          <p>
            Go to <StyledLink to="/">Home</StyledLink> to see all your items for
            sale
          </p>
        </>
      ) : type === "delete-item" ? (
        <>
          <h1>Item has been deleted!</h1>
          <p>
            Go to <StyledLink to="/">Home</StyledLink> to see all your items for
            sale
          </p>
        </>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.yellow};
  position: relative;
  top: 5px;
  left: 40%;
  border-radius: 12px;
  width: 25%;
  height: 175px;

  & h1 {
    color: white;
    padding: 5px;
    text-align: center;
  }
  & p {
    color: white;
    padding: 5px;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  color: white;

  &:visited {
    color: white;
  }
`;

export default Success;
