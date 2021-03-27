import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../GlobalStyles";

const ProductsGrid = (props) => {
  return (
    <>
      <Container>
        <>
          {props.data.map((product) => {
            return (
              <StyledLink to={`/products/${product._id}`}>
                <ProductContainer key={product._id}>
                  <Image src={product.imageSrc} alt="product for sale" />
                  <Title>{product.name}</Title>
                  <Price>${product.price}</Price>
                </ProductContainer>
              </StyledLink>
            );
          })}
        </>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 750px;
  left: 30%;
  top: 5px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: ${colors.yellow};
  border-radius: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-top: 5px;
`;

const ProductContainer = styled.div`
  width: 200px;
  height: 300px;
`;

const Image = styled.img`
  max-width: 100%;
  height: 200px;
  border-radius: 5px;
`;

const Title = styled.p`
  font-size: 12pt;
  color: white;
  text-align: center;
  line-height: 15px;
`;

const Price = styled.p`
  text-align: center;
  color: white;
  margin-top: 0px;
`;

export default ProductsGrid;

// props returns the following array of objects:
// _id: "cd18e7ec-7496-4171-99b9-8e79956dc8aa"
// brand: "Levis"
// ​​​
// category: "Clothes"
// ​​​
// description: "Never worn Levis high-waisted jeans! The size is 30/32."
// ​​​
// imageSrc: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5…DESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
// ​​​
// name: "Levis High-Rise Boyfriend Jeans"
// ​​​
// price: 50
// ​​​
// quantity: 1
// ​​​
// sellerId: "S-04"
