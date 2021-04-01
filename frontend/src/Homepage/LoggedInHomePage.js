import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
          }
          setRandomProducts(randomProductArray);
        });
    }
  }, [loggedIn]);

  return (
    <>
      <h1>Welcome back {accountInfo.firstName}</h1>
      {accountInfo.type === "seller" ? (
        <>
          <SectionTitle>Your items for sale...</SectionTitle>
          {sellerItems !== null && (
            <Preview data={sellerItems} isProducts={isProducts} />
          )}
          <ButtonLink path={"/selling/add"} text={"Add New"} />
          <ButtonLink path={"/account/update"} text={"Update Account"} />
        </>
      ) : (
        <>
          <SectionTitle>Products you may like...</SectionTitle>
          {randomProducts !== null && (
            <Preview data={randomProducts} isProducts={isProducts} />
          )}
          <ButtonLink path={"/products"} text={"Start Shopping"} />
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

export default LoggedInHP;
