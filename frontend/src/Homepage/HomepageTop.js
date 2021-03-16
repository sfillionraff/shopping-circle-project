import React from "react";
import styled from "styled-components";

import { colors } from "../GlobalStyles";

const HomepageTop = () => {
  return (
    <div>
      <HomepageBanner>
        <Title>Welcome to The Shopping Circle. Easy, breezy, green</Title>
        <Container>
          <Description>
            The Shopping Circle is an easy way to buy things you want and sell
            things you don't need. It's better for you and the planet. The
            Shopping Circle: the easier and greener way to shop
          </Description>
          <p>insert logo animation here</p>
        </Container>
      </HomepageBanner>
    </div>
  );
};

const HomepageBanner = styled.div`
  position: relative;
  top: 100px;
  background-color: ${colors.green};
  width: 100%;
  height: 500px;
`;

const Title = styled.h1`
  color: white;
  position: absolute;
  text-align: center;
  top: 25%;
  left: 25%;
`;

const Container = styled.div`
  position: relative;
  top: 55%;
  left: 100px;
  width: 450px;
  height: 450px;
  display: flex;
`;

const Description = styled.p`
  color: white;
`;

export default HomepageTop;
