import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { colors } from "../GlobalStyles";
import { addItem } from "../Reducers/actions";
import ButtonLink from "../ButtonLink";

const ProductDetails = () => {
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const { _id } = useParams();
  const [product, setProduct] = useState(null);
  const [productSeller, setProductSeller] = useState(null);
  const history = useHistory();
  const [itemDeleted, setItemDeleted] = useState();
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

  const deleteItem = () => {
    fetch(`/deleteItem/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json)
      .then((response) => setItemDeleted(true))
      .catch((error) => {
        console.log(error);
        setItemDeleted(false);
      });
  };

  useEffect(() => {
    if (itemDeleted) {
      history.push("/success/delete");
    }
  }, [itemDeleted]);

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
              {!loggedIn || accountInfo.type === "buyer" ? (
                <button onClick={() => dispatch(addItem(product))}>
                  Add to Cart
                </button>
              ) : (
                <>
                  <ButtonLink
                    path={`/selling/update/${_id}`}
                    text={"Update Item"}
                  />
                  <button
                    onClick={() => deleteItem()}
                    style={{ width: 130, height: 30, padding: 2, fontSize: 16 }}
                  >
                    Delete Item{" "}
                  </button>
                </>
              )}
            </InfoContainer>
          </Container>
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
