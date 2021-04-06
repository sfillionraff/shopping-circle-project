import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { removeItem } from "../Reducers/actions";
import { colors } from "../GlobalStyles";

const CartItem = (item) => {
  const { _id, name, price, quantity, imageSrc } = item.item;
  const dispatch = useDispatch();
  const history = useHistory();

  const removeFunction = (item) => {
    dispatch(removeItem(item));
    history.push("/cart");
  };

  return (
    <Container key={_id}>
      <Image src={imageSrc} alt={name} />
      <InfoContainer>
        <p>{name}</p>
        <p>${price}</p>
      </InfoContainer>
      <Button onClick={() => removeFunction(item)}>Remove</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 600px;
  height: 150px;
  border: 2px solid ${colors.yellow};
  position: relative;
  margin-bottom: 5px;
`;

const Image = styled.img`
  position: absolute;
  top: 15px;
  left: 15px;
  max-width: 165px;
  height: 125px;
  object-fit: contain;
  border-radius: 12px;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 35%;
  width: 200px;
`;

const Button = styled.button`
  position: absolute;
  top: 30px;
  left: 400px;
`;

export default CartItem;
