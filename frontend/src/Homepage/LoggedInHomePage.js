import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Preview from "./Preview";
import ButtonLink from "../ButtonLink";

const LoggedInHP = ({ accountInfo, loggedIn, isProducts }) => {
  const [sellerItems, setSellerItems] = useState(null);
  const [randomProducts, setRandomProducts] = useState(null);

  useEffect(() => {
    if (loggedIn && accountInfo.type === "seller") {
      fetch("/products")
        .then((res) => res.json())
        .then((response) => {
          let itemsArray = response.data.filter((product) => {
            return product.sellerId === accountInfo._id;
          });
          setSellerItems(itemsArray);
        })
        .catch((error) => console.log(error));
    } else if (loggedIn && accountInfo.type === "buyer") {
      fetch("products")
        .then((res) => res.json())
        .then((response) => {
          let copyArray = [...response.data];
          let randomProductArray = [];
          for (let x = 0; x < 4; x++) {
            let random =
              copyArray[Math.floor(Math.random() * copyArray.length)];
            randomProductArray.push(random);
            let indexToRemove = copyArray.indexOf(random);
            copyArray.splice(indexToRemove, 1);
          }
          setRandomProducts(randomProductArray);
          console.log(randomProductArray);
        });
    }
  }, [loggedIn, accountInfo]);

  return (
    <>
      <h1>Welcome back {accountInfo.firstName}</h1>
      {accountInfo.type === "seller" ? (
        <>
          <SectionTitle>Your items for sale...</SectionTitle>
          {sellerItems !== null && (
            <Preview data={sellerItems} isProducts={isProducts} />
          )}
          <ButtonLinkContainer>
            <ButtonLink path={"/selling/add"} text={"Add New"} />
          </ButtonLinkContainer>
        </>
      ) : (
        <>
          <SectionTitle>Products you may like...</SectionTitle>
          {randomProducts !== null && (
            <Preview data={randomProducts} isProducts={isProducts} />
          )}
          <ButtonLinkContainer>
            <ButtonLink path={"/products"} text={"Start Shopping"} />
          </ButtonLinkContainer>
        </>
      )}
    </>
  );
};

const SectionTitle = styled.h2`
  margin-left: 5px;
  margin-top: 100px;
  font-size: 24pt;
`;

const ButtonLinkContainer = styled.div`
  position: relative;
  left: 45%;
  margin: 15px;
`;

export default LoggedInHP;
