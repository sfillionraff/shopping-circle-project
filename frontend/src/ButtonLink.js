import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const ButtonLink = ({ path, text }) => {
  return (
    <Container>
      <StyledLink to={path}>{text}</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.green};
  font-size: 14pt;
  border-radius: 12px;
  border-style: none;
  width: 175px;
  height: 45px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 15%;
  left: 10%;
`;

export default ButtonLink;
