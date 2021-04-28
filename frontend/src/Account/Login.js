import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logIntoAccount, logInError } from "../Reducers/actions";
import Form from "../Form";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const errorLoggingIn = useSelector((state) => state.accountReducer.error);
  console.log(errorLoggingIn);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
    console.log(account);
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (account.email !== "" && account.password !== "") {
      await fetch("/account/login", {
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
        formType="login"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {errorLoggingIn !== null && (
        <p style={{ color: "red", fontSize: 12 }}>Please fill in all fields</p>
      )}
    </>
  );
};

export default Login;
