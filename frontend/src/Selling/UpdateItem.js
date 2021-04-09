import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../GlobalStyles";
import Form from "../Form";

const UpdateItem = () => {
  const { _id } = useParams();
  const history = useHistory();
  const [productToUpdate, setProductToUpdate] = useState(null);
  const [success, setSuccess] = useState();
  const [itemDeleted, setItemDeleted] = useState();

  const handleChange = (value, name) => {
    setProductToUpdate({ ...productToUpdate, [name]: value });
    console.log(productToUpdate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/updateItem", {
      method: "PUT",
      body: JSON.stringify(productToUpdate),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      //   .then((response) => console.log(response));
      .then((response) => setSuccess(true))
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
  };

  const deleteItem = (e) => {
    e.preventDefault();
    fetch("/deleteItem", {
      method: "DELETE",
      body: JSON.stringify(_id),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json)
      .then((response) => setItemDeleted(true))
      .catch((error) => {
        console.log(error);
        setItemDeleted(false);
      });
  };

  useEffect(() => {
    fetch(`/products/${_id}`)
      .then((res) => res.json())
      .then((response) => setProductToUpdate(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (success) {
      history.push("/success/update");
    } else if (itemDeleted) {
      history.push("/success/delete");
    }
  });

  return (
    <Container>
      {productToUpdate !== null && (
        <>
          <Form
            formData={productToUpdate}
            formType={"updateItem"}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 10%;
  left: 45%;
  width: 300px;
  height: 400px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default UpdateItem;
