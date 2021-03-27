import React from "react";
import styled from "styled-components";

import { colors } from "../GlobalStyles";

const DetailsComponent = ({ item }) => {
  return (
    <>
      {/* condition here */}
      <Container key={item._id}>
        <Image src={item.imageSrc} alt={item.name} />
        <InfoContainer>
          <h2>{item.name}</h2>
        </InfoContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  margin-left: 100px;
  margin-top: 50px;
  width: 1200px;
  height: 400px;
  background-color: ${colors.yellow};
`;

const Image = styled.img`
  position: absolute;
  width: 300px;
  height: 350px;
  border-radius: 12px;
  left: 250px;
  top: 10px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  width: 400px;
  left: 600px;
`;

export default DetailsComponent;
