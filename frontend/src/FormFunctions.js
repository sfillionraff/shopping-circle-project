import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { logIntoAccount, logInError } from "./Reducers/actions";

const useForm = (state, stateFunction, link) => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState();
  const handleChange = (event, state, stateFunction) => {
    const { name, value } = event.target;
    stateFunction({
      ...state,
      [name]: value,
    });
    return state;
  };

  const validateForm = (state) => {
    let properties = Object.keys(state);
    let valid = properties.map((property) => {
      if (state[property] !== "") {
        return true;
      } else {
        return false;
      }
    });
    if (valid) {
      setIsValid(true);
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };

  const handleSubmit = async (e, state, link) => {
    e.preventDefault();
    if (isValid) {
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
        .catch((error) => dispatch(logInError(state, error)));
    }
  };
};

// const useHandleChange = (e, state, stateFunction) => {
//   const { name, value } = e.target;
//   stateFunction({
//     ...state,
//     [name]: value,
//   });
//   return state;
// };

// const useFormValidation = (state) => {
//   let properties = Object.keys(state);
//   let isValid = properties.map((property) => {
//     if (state[property] !== "") {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   if (isValid) {
//     return true;
//   } else {
//     return false;
//   }
// };

// import { logIntoAccount, logInError } from "./Reducers/actions";
// const useAccountSubmit = async (e, state, link) => {
//   const dispatch = useDispatch();
//   e.preventDefault();
//   if (useFormValidation()) {
//     await fetch(link, {
//       method: "POST",
//       body: JSON.stringify(state),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((result) => result.json())
//       .then((response) => dispatch(logIntoAccount(response.data)))
//       .catch((error) => dispatch(logInError(state, error)));
//   }
// };

export default useForm;
