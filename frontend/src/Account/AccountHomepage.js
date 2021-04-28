import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import ButtonLink from "../ButtonLink";
import { logOutAccount, clearCart } from "../Reducers/actions";
import { colors } from "../GlobalStyles";

const AccountHomepage = () => {
  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const dispatch = useDispatch();

  return (
    <>
      {!loggedIn ? (
        <NotLoggedInContainer>
          <SignInOptions>
            <h2>Making an account is easy!</h2>
            <ButtonLinkContainerOne>
              <ButtonLink path={"/account/create"} text={"Create Account"} />
            </ButtonLinkContainerOne>
          </SignInOptions>
          <SignInOptions>
            <h2>Already a part of the Shopping Circle Community?</h2>
            <ButtonLinkContainerTwo>
              <ButtonLink path={"/account/login"} text={"Login"} />
            </ButtonLinkContainerTwo>
          </SignInOptions>
        </NotLoggedInContainer>
      ) : (
        <div>
          <div>
            <h1>Account Information</h1>
          </div>
          <UserProfileContainer>
            <img src={accountInfo.imageSrc} alt="profile picture" />
            <AccountInfoContainer>
              <h2>
                Name:
                {accountInfo.firstName} {accountInfo.lastName}
              </h2>
              <p>Email: {accountInfo.email}</p>
            </AccountInfoContainer>
          </UserProfileContainer>
          <ButtonContainer>
            <span style={{ padding: 10 }}>
              <ButtonLink path={"/update/account"} text={"Update Account"} />
            </span>
            <Button
              onClick={() => {
                dispatch(logOutAccount());
                dispatch(clearCart());
              }}
            >
              Log Out
            </Button>
          </ButtonContainer>
        </div>
      )}
    </>
  );
};

const NotLoggedInContainer = styled.div`
  display: flex;
  width: 75%;
  height: 150px;
  position: relative;
  top: 5%;
  left: 15%;
  justify-content: space-around;
  align-items: baseline;
  color: white;
`;

const SignInOptions = styled.div`
  margin: 15px;
  padding: 10px;
  background-color: ${colors.yellow};
  border-radius: 12px;
`;

const Button = styled.button`
  width: 150px;
  height: 25px;
  padding: 0;
  font-size: 12pt;
`;

const UserProfileContainer = styled.div`
  position: relative;
  left: 5%;
  background-color: ${colors.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 200px;
  border-radius: 12px;

  & img {
    width: 200px;
    height: 150px;
    object-fit: contain;
    border-radius: 12px;
  }
`;

const AccountInfoContainer = styled.div`
  margin-right: 10px;
  & h2 {
    margin: 5px;
  }

  & p {
    margin: 5px;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  left: 15%;
`;

const ButtonLinkContainerOne = styled.div`
  position: relative;
  left: 25%;
`;

const ButtonLinkContainerTwo = styled.div`
  position: relative;
  left: 40%;
`;

export default AccountHomepage;

// account reducer state looks like this:
// _id(pin): "2c7651ab-6e70-41b8-bdb7-d84e7887efa7"
// name(pin): "Vanya Hargreeves"
// type(pin): "seller"
// email(pin): "vanya.hargreeves@yahoo.com"
// imageSrc(pin): "https://wallpapercave.com/wp/wp7789323.jpg"
// password(pin): "vanyaHAR1"
