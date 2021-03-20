import React from "react";
import styled from "styled-components";
import { colors } from "./GlobalStyles";

const Footer = () => {
  return (
    <Container>
      <h1>this is the footer</h1>
      <div>
        <h1>About us</h1>
        <ul>
          <li>Our philosophy</li>
          <li>Environmental impact</li>
        </ul>
      </div>
      <div>
        <h1>Shop</h1>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
          <li>Category 5</li>
        </ul>
      </div>
      <div>
        <h1>Sell</h1>
        <p>Seller's Guide</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.green};
  color: white;
  margin-top: 50px;
`;

export default Footer;
