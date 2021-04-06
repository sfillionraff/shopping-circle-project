import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const ButtonLink = ({ path, text }) => {
  return (
    <>
      {/* <Container> */}
      <StyledLink to={path}>{text}</StyledLink>
      {/* </Container> */}
    </>
  );
};

// const Container = styled.div`
//   background-color: ${colors.green};
//   border-radius: 12px;
//   border-style: none;
//   width: 150px;
//   height: 35px;
//   position: relative;
//   margin: auto;

//   &:hover {
//     cursor: pointer;
//   }
// `;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  /* position: absolute; */
  margin: auto;
  font-size: 12pt;
  padding: 2px 20px;
  position: relative;
  border-radius: 12px;
  border-style: none;
  background-color: ${colors.green};

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonLink;
