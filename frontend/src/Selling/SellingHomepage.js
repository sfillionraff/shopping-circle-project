import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../GlobalStyles";
import Preview from ".././Homepage/Preview";
import ButtonLink from "../ButtonLink";

const SellingHomepage = () => {
  const [sellers, setSellers] = useState(null);
  let isProducts = false;

  useEffect(() => {
    fetch("/sellers/explore")
      .then((res) => res.json())
      .then((response) => setSellers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <TopContainer>
          <h1>Selling has never been so easy</h1>
          <img
            src="https://i.cbc.ca/1.5164075.1559771487!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/selling-online.jpg"
            alt="selling things online"
          />
          <p>To sell on the Shopping Circle, you just need an account.</p>
          <p>No fees to start out. What are you waiting for?</p>
        </TopContainer>
        <div>
          <h1>Explore our sellers</h1>
          {sellers !== null && (
            <Preview data={sellers} isProducts={isProducts} />
          )}
        </div>
        <h1 style={{ textAlign: "center" }}>
          Join the Shopping Circle Community
        </h1>
        <BottomContainer>
          <AccountOptions>
            <h2>Want to get started?</h2>
            {/* <p>Create an account and start adding items to sell immediately!</p> */}
            <ButtonLink path={"/account/create"} text={"Create an Account"} />
          </AccountOptions>
          <AccountOptions>
            <h2>Already one of our sellers?</h2>
            <ButtonLink path={"/account/login"} text={"Login"} />
          </AccountOptions>
        </BottomContainer>
      </div>
    </>
  );
};

const TopContainer = styled.div`
  background-color: ${colors.green};
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  & h2 {
    color: white;
    text-align: center;
    font-size: 16pt;
  }
`;

const AccountOptions = styled.div`
  width: 300px;
  background-color: ${colors.yellow};
  padding: 10px;
  margin: 5px;
  border-radius: 12px;
`;

// ADD CONDITION FOR IF USER IS LOGGED IN

export default SellingHomepage;
