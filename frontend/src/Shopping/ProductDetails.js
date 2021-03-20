import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { colors } from "../GlobalStyles";
import { addItem } from "../Cart/actions";

const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/products/${_id}`)
      .then((res) => res.json())
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  // IF OUT OF STOCK, NEEDS TO SHOW THAT
  // HAVE A BACK TO SHOPPING BUTTON

  return (
    <>
      {product !== null && (
        <>
          <Container key={product._id}>
            <Image src={product.imageSrc} alt={product.name} />
            <InfoContainer>
              <h2>{product.name}</h2>
              {product.brand ? <p>{product.brand}</p> : null}
              <p>{product.description}</p>
              <p>${product.price}</p>
              <p>Seller:</p>
              <p>{product.category}</p>
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
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 300px;
  left: 600px;
  top: 10px;
`;

export default ProductDetails;
