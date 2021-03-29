import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { colors } from "../GlobalStyles";
import Preview from ".././Homepage/Preview";

const SellingHomepage = () => {
  const [sellers, setSellers] = useState(null);
  let isProducts = false;

  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);

  return (
    <>
      {!loggedIn ? (
        <div>
          <TopContainer>
            <h1>Selling has never been so easy</h1>
            <img
              src="https://i.cbc.ca/1.5164075.1559771487!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/selling-online.jpg"
              alt="selling things online"
            />
            <p>
              To sell on the Shopping Circle, you just need a camera and some
              things to sell!
            </p>
            <p>No fees to start out. What are you waiting for?</p>
          </TopContainer>
          <div>
            <h1>Explore sellers</h1>
            {sellers !== null && (
              <Preview data={sellers} isProducts={isProducts} />
            )}
          </div>
          <h1>Join the Shopping Circle Community</h1>
          <BottomContainer>
            <AccountOptions>
              <h2>Want to get started?</h2>
              <p>
                Create an account and start adding items to sell immediately!
              </p>
              <Link to="/account/create">
                <button>Create an Account</button>
              </Link>
            </AccountOptions>
            <AccountOptions>
              <h2>Already one of our sellers?</h2>
              <Link to="/account/login">
                <button>Login</button>
              </Link>
            </AccountOptions>
          </BottomContainer>
        </div>
      ) : loggedIn && accountInfo.type === "seller" ? (
        <>
          <h1>Hello {accountInfo.firstName}!</h1>
          <Link to="/selling/add">Add New </Link>
          <Link to="/account/update">Update Account </Link>
        </>
      ) : (
        <>
          <h1> Want to become a seller? </h1>
          <Link to="/account/create">Create Account</Link>
        </>
      )}
    </>
  );
};

const TopContainer = styled.div`
  background-color: ${colors.green};
`;

const BottomContainer = styled.div`
  display: flex;
  background-color: ${colors.yellow};
  justify-content: center;
  margin-top: 10px;
`;

const AccountOptions = styled.div`
  width: 300px;
`;

// ADD CONDITION FOR IF USER IS LOGGED IN

export default SellingHomepage;
