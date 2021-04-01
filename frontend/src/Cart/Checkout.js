import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Form from "../Form";
import { colors } from "../GlobalStyles";

const Checkout = () => {
  const history = useHistory();
  const cartContents = useSelector((state) => state.cartReducer);
  const productIds = cartContents.map((product) => {
    return product._id;
  });
  const [success, setSuccess] = useState();

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
    fetch("/updateProducts", {
      method: "PATCH",
      body: JSON.stringify(productIds),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      history.push("/success/purchase");
    }
  }, [success]);

  return (
    <>
      <Container>
        <BillingContainer>
          <ContainerTitle>Billing Information</ContainerTitle>
          <Form
            formData={checkoutForm}
            formType={"billingInfo"}
            handleSubmit={null}
            handleChange={handleChangeBilling}
          />
        </BillingContainer>
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
        <CardContainer>
          <ContainerTitle>Payment Information</ContainerTitle>
          <Form
            formData={payInfo}
            formType={"payInfo"}
            handleSubmit={handleSubmit}
            handleChange={handleChangeCard}
          />
        </CardContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
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
  max-height: 100%;
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
