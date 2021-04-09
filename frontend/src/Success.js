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
            Go to <StyledLink to="/account">Account</StyledLink> to see all your
            items for sale
          </p>
        </>
      ) : type === "update" ? (
        <>
          <h1>Item has been updated!</h1>
          <p>
            Go to <StyledLink to="/account">Account</StyledLink> to see all your
            items for sale
          </p>
        </>
      ) : type === "delete" ? (
        <>
          <h1>Item has been deleted!</h1>
          <p>
            Go to <StyledLink to="/account">Account</StyledLink> to see all your
            items for sale
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
