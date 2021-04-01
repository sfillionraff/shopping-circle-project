import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

import { BiArrowBack } from "react-icons/bi";
import ProductsGrid from "./ProductsGrid";
import { colors } from "../GlobalStyles";

const SideBarSearch = () => {
  const { selectedCategory } = useParams();
  const category =
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
  const [categoryProducts, setCategoryProducts] = useState(null);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((response) => {
        const productsArray = response.data;
        const sorted = productsArray.filter((product) => {
          return product.category === category;
        });
        setCategoryProducts(sorted);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <StyledNavLink to="/products">
        <Arrow />
        Back
      </StyledNavLink>
      <h1>Showing All {category} Products</h1>
      {categoryProducts && <ProductsGrid data={categoryProducts} />}
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  color: ${colors.green};
  text-decoration: none;
  position: relative;
  left: 5px;

  &:visited {
    color: ${colors.green};
  }
`;

const Arrow = styled(BiArrowBack)`
  width: 15px;
  height: 15px;
`;

export default SideBarSearch;
