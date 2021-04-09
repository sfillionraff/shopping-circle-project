import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../GlobalStyles";
import Preview from "../Homepage/Preview";

const SellerProfile = () => {
  const { _id } = useParams();
  const [seller, setSeller] = useState(null);
  const [sellerProducts, setSellerProducts] = useState(null);

  useEffect(() => {
    fetch(`/sellers/${_id}`)
      .then((res) => res.json())
      .then((response) => setSeller(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (seller) {
      fetch("/products")
        .then((res) => res.json())
        .then((response) => {
          let itemsArray = response.data.filter((product) => {
            return product.sellerId === _id;
          });
          setSellerProducts(itemsArray);
          sellerProducts.map((product) => {
            console.log(product);
          });
        })
        .catch((error) => console.log(error));
    }
  }, [seller]);

  return (
    <>
      {seller !== null && (
        <BigContainer>
          <Container key={seller._id}>
            <Image
              src={seller.imageSrc}
              alt={`${seller.firstName} ${seller.lastName}`}
            />
            {/* <InfoContainer> */}
            <Name>
              {seller.firstName} {seller.lastName}
            </Name>
            {/* </InfoContainer> */}
          </Container>
          <ForSaleContainer>
            <h1>{seller.firstName}'s Items for Sale</h1>
            {sellerProducts !== null && (
              <Preview data={sellerProducts} isProducts={true} />
            )}
          </ForSaleContainer>
        </BigContainer>
      )}
    </>
  );
};

const BigContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  margin-left: 100px;
  margin-top: 50px;
  width: 300px;
  height: 315px;
  background-color: ${colors.yellow};
`;

const Image = styled.img`
  position: absolute;
  width: 200px;
  height: 250px;
  border-radius: 12px;
  top: 10px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;

const Name = styled.h1`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 75px;
  top: 255px;
  font-size: 14pt;
`;

const ForSaleContainer = styled.div`
  height: 300px;
  width: 800px;
  & h1 {
    margin: 0;
    font-size: 16pt;
  }
`;

export default SellerProfile;
