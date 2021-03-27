import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// import cartReducer from ".././Reducers/cartReducers";
import { MdRemoveShoppingCart } from "react-icons/md";
import CartItem from "./CartItem";
import { colors } from "../GlobalStyles";

const Cart = () => {
  const history = useHistory();
  const cartContents = useSelector((state) => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);

  const getTotal = (items) => {
    let prices = items.map((item) => {
      return item.price;
    });
    console.log("prices:", prices);
    return prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  useEffect(() => {
    if (cartContents.length !== 0) {
      setCartTotal(getTotal(cartContents));
    }
  }, [cartContents]);

  return (
    <>
      {cartContents.length === 0 ? (
        <NoCartContainer>
          <EmptyCart />
          <h2>Your cart is empty!</h2>
          <Link to="/products">
            <button>Start Shopping</button>
          </Link>
        </NoCartContainer>
      ) : (
        <>
          <h2 style={{ lineIndent: 20 }}>Your Cart: </h2>
          <CartContainer>
            {cartContents.map((item, index) => {
              // return <p>{item.name}</p>;
              return <CartItem key={index} item={item} />;
            })}
            <TotalContainer>
              <h4 style={{ textAlign: "center" }}>Total: ${cartTotal}</h4>
              <h4 style={{ textAlign: "center" }}>Taxes: $0.00 </h4>
              <button onClick={() => history.push("/checkout")}>
                Check Out
              </button>
            </TotalContainer>
          </CartContainer>
        </>
      )}
    </>
  );
};

const NoCartContainer = styled.div`
  position: relative;
  top: 10px;
  left: 40%;
`;

const EmptyCart = styled(MdRemoveShoppingCart)`
  width: 50px;
  height: 50px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  left: 75px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80%;
  top: 15px;
  left: 15px;
`;

const TotalContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 800px;
  border: 2px solid ${colors.yellow};
  border-radius: 12px;
`;

export default Cart;
