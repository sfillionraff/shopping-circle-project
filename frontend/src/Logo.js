import React from "react";
import styled, { keyframes } from "styled-components";

import { IoGlobe, IoGlobeSharp } from "react-icons/io5";
import { BsBagFill } from "react-icons/bs";
import { colors } from "./GlobalStyles";

const Logo = () => {
  return (
    <Container>
      <span>
        <Globe />
        <Bag />
      </span>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 5%;
  left: 5%;
`;

const Globe = styled(IoGlobe)`
  width: 50px;
  height: 50px;
  color: white;
`;

const Bag = styled(BsBagFill)`
  position: absolute;
  left: 25%;
  top: 2%;
  width: 25px;
  height: 25px;
  color: ${colors.yellow};
  z-index: 5;
`;

export default Logo;
