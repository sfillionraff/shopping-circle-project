import React from "react";
import styled from "styled-components";

import { colors } from "../GlobalStyles";
import Logo from "../Logo";

const HomepageTop = () => {
  return (
    <Container>
      <HomepageBanner>
        <Title>Welcome to The Shopping Circle. Easy, breezy, green</Title>
        <SubtitleContainer>
          <Description>
            The Shopping Circle is an easy way to buy things you want and sell
            things you don't need. It's better for you and the planet. The
            Shopping Circle: the easier, greener way to shop
          </Description>
          <Logo />
        </SubtitleContainer>
      </HomepageBanner>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 2%;
`;

const HomepageBanner = styled.div`
  position: relative;
  top: 100px;
  background-color: ${colors.green};
  width: 100%;
  height: 300px;
`;

const Title = styled.h1`
  color: white;
  position: absolute;
  text-align: center;
  top: 25%;
  left: 25%;
`;

const SubtitleContainer = styled.div`
  position: relative;
  top: 55%;
  left: 475px;
  width: 450px;
  height: 450px;
  display: flex;
`;

const Description = styled.p`
  color: white;
`;

export default HomepageTop;
