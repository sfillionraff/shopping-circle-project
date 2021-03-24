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
          <SideBar data={allProducts} />
          <ProductsGrid data={allProducts} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  /* display: flex;
  align-content: flex-start;
  align-items: baseline; */
  width: 80%;
  position: relative;
`;

export default ShoppingHomepage;
