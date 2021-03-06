import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Form from "../Form";
import { colors } from "../GlobalStyles";
import { clearCart } from "../Reducers/actions";

const Checkout = () => {
  const history = useHistory();
  const cartContents = useSelector((state) => state.cartReducer);
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const productIds = cartContents.map((product) => {
    return product._id;
  });
  const [success, setSuccess] = useState();
  const [checkoutError, setCheckoutError] = useState(null);
  const dispatch = useDispatch();

  const getTotal = (items) => {
    let prices = items.map((item) => {
      return item.price;
    });
    console.log("prices:", prices);
    return prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  const [checkoutForm, setCheckoutForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    streetAddress: "",
    apt: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  });

  const [payInfo, setPayInfo] = useState({
    cardNumber: "",
    expiration: "",
    cvc: "",
  });

  const handleChangeBilling = (value, name) => {
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleChangeCard = (value, name) => {
    setPayInfo({ payInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let checkoutValues = Object.values(checkoutForm);
    let payValues = Object.values(payInfo);
    let checkoutValid = checkoutValues.some((value) => value === "");
    let payValid = payValues.some((value) => value === "");
    if (!checkoutValid && !payValid) {
      fetch("/updateProducts", {
        method: "PATCH",
        body: JSON.stringify(productIds),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((response) => {
          setSuccess(true);
          dispatch(clearCart());
        })
        .catch((error) => {
          console.log(error);
          setSuccess(false);
          setCheckoutError(true);
          dispatch(clearCart());
        });
    } else {
      setCheckoutError(true);
    }
  };

  useEffect(() => {
    if (success) {
      history.push("/success/purchase");
    }
  }, [success]);

  return (
    <>
      <h1>Checkout</h1>
      <Container>
        <CartContainer>
          <ContainerTitle>Cart Overview</ContainerTitle>
          {cartContents && (
            <>
              {cartContents.map((item) => {
                return (
                  <CartItemContainer key={item._id}>
                    <Image src={item.imageSrc} alt={item.name} />
                    <TextContainer>
                      <Text>{item.name}</Text>
                      <Text>${item.price}</Text>
                    </TextContainer>
                  </CartItemContainer>
                );
              })}
            </>
          )}
          <h4>Total: ${getTotal(cartContents)}</h4>
        </CartContainer>
        <BillingContainer>
          <ContainerTitle>Billing Information</ContainerTitle>
          <Form
            formData={checkoutForm}
            formType={"billingInfo"}
            handleSubmit={null}
            handleChange={handleChangeBilling}
          />
        </BillingContainer>
        <CardContainer>
          <ContainerTitle>Payment Information</ContainerTitle>
          <Form
            formData={payInfo}
            formType={"payInfo"}
            handleSubmit={handleSubmit}
            handleChange={handleChangeCard}
          />
          {checkoutError !== null && (
            <p style={{ color: "red", fontSize: 12 }}>
              Please fill in the form properly
            </p>
          )}
        </CardContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-top: 50px;
`;

const ContainerTitle = styled.h1`
  color: white;
  font-size: 18pt;
`;

const BillingContainer = styled.div`
  position: relative;
  top: 10%;
  left: 5%;
  width: 225px;
  height: 525px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CartContainer = styled.div`
  position: relative;
  top: 10%;
  left: 5%;
  width: 225px;
  max-height: 400px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CartItemContainer = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  position: relative;
  left: 10%;
  margin: 5px;
`;

const Text = styled.p`
  color: white;
  font-size: 9pt;
  margin: 0;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
  object-fit: contain;
  margin: 0;
`;

const CardContainer = styled.div`
  position: relative;
  top: 10%;
  left: 5%;
  width: 250px;
  height: 250px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Checkout;
