import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeItem } from "../Cart/actions";

const CartItem = (item) => {
  const { _id, name, price, quantity, imageSrc } = item.item;
  const dispatch = useDispatch();

  return (
    <Container key={_id}>
      <img src={imageSrc} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => dispatch(removeItem(item))} />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

export default CartItem;
