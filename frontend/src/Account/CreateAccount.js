import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logIntoAccount } from "../Reducers/actions";
import Form from "../Form";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);

  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    imageSrc: "",
  });

  const handleChange = (value, name) => {
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/account/addNew", {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((response) => dispatch(logIntoAccount(response.account)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [loggedIn]);

  return (
    <>
      <Form
        formData={account}
        formType="createAccount"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default CreateAccount;
