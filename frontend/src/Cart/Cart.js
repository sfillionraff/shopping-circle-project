import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartItems } from "./reducers";
import { MdRemoveShoppingCart } from "react-icons/md";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContents = useSelector(cartItems);
  console.log(cartContents);
  return (
    <>
      {cartContents.length === 0 ? (
        <div>
          <MdRemoveShoppingCart />
          <h2>Your cart is empty!</h2>
          <Link to="/products">
            <button>Start Shopping</button>
          </Link>
        </div>
      ) : (
        <CartContainer>
          {cartContents.map((item, index) => {
            // return <p>{item.name}</p>;
            console.log(item);
            return <CartItem key={index} item={item} />;
          })}
          <button>Check Out</button>
        </CartContainer>
      )}
    </>
  );
};

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Cart;
