import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { colors } from "../GlobalStyles";
import { addItem } from "../Reducers/actions";

const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [productSeller, setProductSeller] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/products/${_id}`)
      .then((res) => res.json())
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (product) {
      fetch("/sellers/explore")
        .then((res) => res.json())
        .then((response) => {
          let sellerInfo = response.data.filter((seller) => {
            return seller._id === product.sellerId;
          });
          setProductSeller(sellerInfo[0]);
        });
    }
  }, [product]);

  return (
    <>
      {product !== null && (
        <>
          <Container key={product._id}>
            <Image src={product.imageSrc} alt={product.name} />
            <InfoContainer>
              <h2 style={{ marginBottom: 0 }}>{product.name}</h2>
              {product.brand ? (
                <p style={{ marginTop: 0 }}>{product.brand}</p>
              ) : null}
              <p>{product.description}</p>
              <p>${product.price}</p>
              {productSeller !== null && (
                <span>
                  Seller:{" "}
                  <StyledLink to={`/selling/${productSeller._id}`}>
                    {productSeller.firstName} {productSeller.lastName}
                  </StyledLink>
                </span>
              )}
              <p>Category: {product.category}</p>
              <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </button>
            </InfoContainer>
          </Container>
          <div>
            <h2>More like this...</h2>
          </div>
        </>
      )}
    </>
  );
};

const Container = styled.div`
  position: relative;
  margin-left: 100px;
  margin-top: 50px;
  width: 1200px;
  height: 400px;
  background-color: ${colors.yellow};
`;

const Image = styled.img`
  position: absolute;
  width: 300px;
  height: 350px;
  border-radius: 12px;
  left: 250px;
  top: 10px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 400px;
  left: 600px;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  color: black;
  &:visited {
    color: black;
  }
`;

export default ProductDetails;
