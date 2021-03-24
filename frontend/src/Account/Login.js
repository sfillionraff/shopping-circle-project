import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { colors } from "../GlobalStyles";
import { logIntoAccount } from "../Reducers/actions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);

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
    await fetch("/account/login", {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((result) => result.json())
      .then((response) => dispatch(logIntoAccount(response.data)))
      .then(() => {
        if (loggedIn) {
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={account.email}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={account.password}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          />
        </Label>
        <input type="submit" value="Login" />
      </form>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 10%;
  left: 45%;
  width: 200px;
  height: 150px;
  padding: 15px;
  background-color: ${colors.yellow};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Label = styled.label`
  color: white;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 12px;
  border-style: none;
  &:focus {
    outline: 1px solid ${colors.green};
  }
`;

export default Login;
