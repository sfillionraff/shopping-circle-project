import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HomepageTop from "./HomepageTop";
import Preview from "./Preview";

const Homepage = () => {
  const [previewProducts, setPreviewProducts] = useState(null);
  const [sellers, setSellers] = useState(null);

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
    <>
      {/* first section */}
      <HomepageTop />
      <SeparatorSection />
      {/* second section */}
      {previewProducts !== null && (
        <div>
          <h2>Explore what's for sale</h2>
          <Preview data={previewProducts} />
          <Link to="/products">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      )}
      <SeparatorSection />
      {/* third section */}
      {sellers !== null && (
        <div>
          <h2>Selling online has never been so easy</h2>
          <Preview data={sellers} />
          <Link to="/selling">
            <Button>Start Selling</Button>
          </Link>
        </div>
      )}
    </>
  );
};

const SeparatorSection = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;

const Button = styled.button`
  position: relative;
  left: 50%;
`;

export default Homepage;
