import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logIntoAccount, logInError } from "../Reducers/actions";
import Form from "../Form";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const errorLoggingIn = useSelector((state) => state.accountReducer.error);

  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    imageSrc: "",
  });

  const handleChange = (value, name) => {
    console.log(account);
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      account.firstName !== "" &&
      account.lastName !== "" &&
      account.email !== "" &&
      account.password !== "" &&
      account.type !== ""
    ) {
      fetch("/account/addNew", {
        method: "POST",
        body: JSON.stringify(account),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((response) => {
          dispatch(logIntoAccount(response.data));
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(logInError(account, "Form not filled in properly"));
    }
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
      {errorLoggingIn !== null && (
        <p style={{ color: "red", fontSize: 12 }}>Please fill in all fields</p>
      )}
    </>
  );
};

export default CreateAccount;
