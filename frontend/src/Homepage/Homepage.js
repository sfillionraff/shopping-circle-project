import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HomepageTop from "./HomepageTop";
import Preview from "./Preview";

const Homepage = () => {
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
    console.log("starting");
    fetch("/sellers/explore")
      .then((res) => res.json())
      .then((response) => setSellers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <HomepageContainer>
      {/* first section */}
      <HomepageTop />
      <SeparatorSection />
      {/* second section */}
      {previewProducts !== null && (
        <div>
          <SectionTitle>Explore what's for sale</SectionTitle>
          <Preview data={previewProducts} isProducts={isProducts} />
          <Link to="/products">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      )}
      {/* third section */}
      {sellers !== null && (
        <div>
          <SectionTitle>Selling online has never been so easy</SectionTitle>
          <Subtitle>Check out our sellers</Subtitle>
          <Preview data={sellers} isProducts={!isProducts} />
          <Link to="/selling">
            <Button>Start Selling</Button>
          </Link>
        </div>
      )}
    </HomepageContainer>
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

const Button = styled.button`
  position: relative;
  left: 50%;
`;

export default Homepage;
