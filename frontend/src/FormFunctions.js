import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logIntoAccount, error } from "./Reducers/actions";

// export all const;

export const FormFunctions = () => {
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.accountReducer.error);
  const handleChange = (value, name, state, setState) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const formValidation = (state) => {
    let properties = Object.keys(state);
    let isValid = properties.map((property) => {
      if (state.property !== "") {
        return true;
      } else {
        return false;
      }
    });
    if (isValid) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e, state, link) => {
    e.preventDefault();
    if (formValidation) {
      await fetch(link, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .then((response) => dispatch(logIntoAccount(response.data)))
        .catch((error) => console.log(error));
    }
  };
};
