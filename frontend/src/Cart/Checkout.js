import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Form from "../Form";
import { colors } from "../GlobalStyles";

const Checkout = () => {
  const history = useHistory();
  const [success, setSuccess] = useState();
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
        <Form
          formData={checkoutForm}
          formType={"billingType"}
          handleSubmit={null}
          handleChange={handleChangeBilling}
        />
      </Container>
      <Container>
        <Form
          formData={payInfo}
          formType={"payInfo"}
          handleSubmit={handleSubmit}
          handleChange={handleChangeCard}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  /* top: 10%;
  left: 45%; */
  width: 200px;
  height: 300px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Checkout;
