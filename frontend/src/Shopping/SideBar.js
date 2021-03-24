import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <h1>Search by Category</h1>
      {categories !== null && (
        <ul style={{ listStyleType: "none" }}>
          {categories.map((category) => {
            return (
              <li>
                <StyledLink to={`/products/${category.toLowerCase()}`}>
                  {category}
                </StyledLink>
              </li>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  background-color: gray;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default SideBar;
