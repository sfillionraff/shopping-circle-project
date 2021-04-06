import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { colors } from "../GlobalStyles";
import { logIntoAccount, logInError } from "../Reducers/actions";
import Form from "../Form";
// NOT SURE I DID THIS PROPERLY
import { FormFunctions } from "../FormFunctions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const errorLoggingIn = useSelector((state) => state.accountReducer.error);

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, name) => {
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
        .then((response) => dispatch(logIntoAccount(response.data)))
        .catch((error) => console.log(error));
    } else {
      dispatch(logInError(account, "Form not filled in properly"));
      // not sure what to do here
      console.log(errorLoggingIn);
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
      {errorLoggingIn !== "null" && (
        <p style={{ color: "red" }}>Please fill in the form properly</p>
      )}
    </>
  );
};

// const Container = styled.div`
//   position: relative;
//   top: 10%;
//   left: 45%;
//   width: 200px;
//   height: 150px;
//   padding: 15px;
//   background-color: ${colors.yellow};
//   border-radius: 12px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// `;

// const Label = styled.label`
//   color: white;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   border-radius: 12px;
//   border-style: none;
//   &:focus {
//     outline: 1px solid ${colors.green};
//   }
// `;

export default Login;
