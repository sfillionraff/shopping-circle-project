import React, { useEffect, useState } from "react";
import { Link as LinkBase } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import HomepageTop from "./HomepageTop";
import Preview from "./Preview";
import LoggedInHP from "./LoggedInHomePage";
import ButtonLink from "../ButtonLink";

const Homepage = () => {
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const [previewProducts, setPreviewProducts] = useState(null);
  const [sellers, setSellers] = useState(null);
  let isProducts = true;

  useEffect(() => {
    fetch("/some_products")
      .then((res) => res.json())
      .then((response) => setPreviewProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("/sellers/explore")
      .then((res) => res.json())
      .then((response) => setSellers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!loggedIn ? (
        <HomepageContainer>
          {/* first section */}
          <HomepageTop />
          <SeparatorSection />
          {/* second section */}
          {previewProducts !== null && (
            <div>
              <SectionTitle>Explore what's for sale</SectionTitle>
              <Preview data={previewProducts} isProducts={isProducts} />
              <ButtonLinkContainer>
                <ButtonLink path={"/products"} text={"Start Shopping"} />
              </ButtonLinkContainer>
            </div>
          )}
          {/* third section */}
          {sellers !== null && (
            <div>
              <SectionTitle>Selling online has never been so easy</SectionTitle>
              <Subtitle>Check out our sellers</Subtitle>
              <Preview data={sellers} isProducts={!isProducts} />
              <ButtonLinkContainer>
                <ButtonLink path={"/selling"} text={"Start Selling"} />
              </ButtonLinkContainer>
            </div>
          )}
        </HomepageContainer>
      ) : (
        <HomepageContainer>
          <LoggedInHP
            accountInfo={accountInfo}
            loggedIn={loggedIn}
            isProducts={isProducts}
          />
        </HomepageContainer>
      )}
    </>
  );
};

const HomepageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SeparatorSection = styled.div`
  width: 100%;
  height: 75px;
  position: relative;
`;

const SectionTitle = styled.h2`
  margin-left: 5px;
  margin-top: 100px;
  font-size: 24pt;
`;

const Subtitle = styled.p`
  margin-left: 5px;
  font-size: 16pt;
`;

const ButtonLinkContainer = styled.div`
  position: relative;
  left: 45%;
  margin: 15px;
`;

export default Homepage;
