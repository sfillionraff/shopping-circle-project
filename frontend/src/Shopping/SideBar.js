import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../GlobalStyles";

const SideBar = (props) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let productCategories = new Set(
      props.data.map((product) => product.category)
    );
    let array = Array.from(productCategories);
    setCategories(array);
  }, []);

  return (
    <Container>
      <Title>Search by Category</Title>
      {categories !== null && (
        <LinkContainer>
          {categories.map((category) => {
            return (
              <li id={category}>
                <StyledLink to={`/products/${category.toLowerCase()}`}>
                  {category}
                </StyledLink>
              </li>
            );
          })}
        </LinkContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 10px;
  left: 25px;
  border: 2px solid ${colors.yellow};
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 14pt;
  text-align: center;
`;

const LinkContainer = styled.ul`
  position: relative;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.green};
  padding: 5px;
`;

export default SideBar;
