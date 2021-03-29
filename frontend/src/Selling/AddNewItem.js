import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Form from "../Form";
import { colors } from "../GlobalStyles";

const AddNewItem = () => {
  const history = useHistory();
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const [success, setSuccess] = useState();
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    description: "",
    imageSrc: "",
  });

  const handleChange = (value, name) => {
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/products/addNew", {
      method: "POST",
      body: JSON.stringify({
        newProduct: newProduct,
        sellerId: accountInfo._id,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((response) => setSuccess(true))
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
  };

  useEffect(() => {
    if (success) {
      history.push("/success/product");
    }
  }, [success]);

  return (
    <Container>
      <Form
        formData={newProduct}
        formType={"addNewItem"}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 10%;
  left: 45%;
  width: 200px;
  height: 300px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default AddNewItem;
