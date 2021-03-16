import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProductsGrid from "./ProductsGrid";
import SideBar from "./SideBar";

const ShoppingHomepage = () => {
  const [allProducts, setAllProducts] = useState(null);
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((response) => setAllProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      {allProducts !== null && (
        <>
          <StyledProductsGrid data={allProducts} />
          <StyledSideBar data={allProducts} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
`;

const StyledProductsGrid = styled(ProductsGrid)`
  grid-area: main;
`;

const StyledSideBar = styled(SideBar)`
  grid-area: menu;
`;

export default ShoppingHomepage;
