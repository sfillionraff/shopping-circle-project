import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "./GlobalStyles";
import { Link } from "react-router-dom";

import Logo from "./Logo";

const Footer = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((response) => {
        let productCategories = new Set(
          response.data.map((product) => product.category)
        );
        let array = Array.from(productCategories).sort();
        setCategories(array);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <BigContainer>
        <h1>The Shopping Circle</h1>
        <LittleContainer>
          <StyledLink to="/about-us">Our Philosophy</StyledLink>
          <StyledLink to="/environment">Environmental Impact</StyledLink>
        </LittleContainer>
      </BigContainer>
      <BigContainer>
        <h1>Shop</h1>
        <LittleContainer>
          {categories !== null && (
            <>
              {categories.map((category) => {
                return (
                  <StyledLink to={`/products/${category.toLowerCase()}`}>
                    {category}
                  </StyledLink>
                );
              })}
            </>
          )}
        </LittleContainer>
      </BigContainer>
      <BigContainer>
        <h1>Sell</h1>
        <StyledLink to={"/selling"}>Start Selling </StyledLink>
      </BigContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.green};
  color: white;
  margin-top: 150px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-bottom: 10px;
  &:visited {
    color: white;
  }
`;

const BigContainer = styled.div`
  margin-left: 25px;
`;

const LittleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Footer;
