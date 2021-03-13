import React from "react";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const Homepage = () => {
  return (
    <>
      {/* first section */}
      <HomepageBanner>
        <h1>Welcome to The Shopping Circle. Easy, breezy, green</h1>
      </HomepageBanner>
      <div>
        <p>
          The Shopping Circle is an easy way to buy things you want and sell
          things you don't need. It's better for you and the planet. The
          Shopping Circle: the easier and greener way to shop
        </p>
      </div>
      {/* second section */}
      <div>
        <h1>pictures of products here</h1>
        <p>button to start shopping here</p>
      </div>
      {/* third section */}
      <div>
        <h1>Sell your things on the Shopping Circle</h1>
        <p>button to become seller here</p>
        <div>
          <p>explore sellers</p>
        </div>
      </div>
    </>
  );
};

const HomepageBanner = styled.div`
  background-color: ${colors.green};
  width: 500px;
`;

export default Homepage;
