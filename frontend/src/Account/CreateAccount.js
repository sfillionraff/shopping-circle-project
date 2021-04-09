import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logIntoAccount, logInError } from "../Reducers/actions";
import Form from "../Form";
// import useForm from "../FormFunctions";

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

  // const accountLink = "/account/addNew";
  // const { handleChange, validateForm, handleSubmit } = useForm(
  //   account,
  //   setAccount,
  //   accountLink
  // );

  const handleChange = (value, name) => {
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
        .then((response) => dispatch(logIntoAccount(response.account)))
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
        <p style={{ color: "red" }}>Please fill in the form properly</p>
      )}
    </>
  );
};

export default CreateAccount;
