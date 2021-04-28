import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../GlobalStyles";
import Form from "../Form";
import { logOutAccount } from "../Reducers/actions";

const UpdateAccount = () => {
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const [updatedAccount, setUpdatedAccount] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState();
  const [accountDeleted, setAccountDeleted] = useState();

  useEffect(() => {
    setUpdatedAccount(accountInfo);
  }, []);

  const handleChange = (value, name) => {
    setUpdatedAccount({ ...updatedAccount, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/update-account", {
      method: "PUT",
      body: JSON.stringify(updatedAccount),
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

  const deleteAccount = (e) => {
    e.preventDefault();
    fetch("/delete-account", {
      method: "DELETE",
      body: JSON.stringify(accountInfo._id),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json)
      .then((response) => {
        setAccountDeleted(true);
        dispatch(logOutAccount());
      })
      .catch((error) => {
        console.log(error);
        setAccountDeleted(false);
      });
  };

  useEffect(() => {
    if (success) {
      history.push("/success/update-account");
    } else if (accountDeleted) {
      history.push("/success/delete-account");
    }
  }, [success, accountDeleted]);

  return (
    <Container>
      {updatedAccount !== null && (
        <>
          <Form
            formData={updatedAccount}
            formType={"updateAccount"}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <button
            onClick={(e) => deleteAccount(e)}
            style={{ width: 130, height: 30, padding: 2, fontSize: 16 }}
          >
            Delete Account
          </button>
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

export default UpdateAccount;
