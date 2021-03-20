import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../GlobalStyles";

const SellingHomepage = () => {
  return (
    <div>
      <TopContainer>
        <h1>Selling has never been so easy</h1>
        <img
          src="https://i.cbc.ca/1.5164075.1559771487!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/selling-online.jpg"
          alt="selling things online"
        />
        <p>
          To sell on the Shopping Circle, you just need a camera and some things
          to sell!
        </p>
        <p>No fees to start out. What are you waiting for?</p>
      </TopContainer>
      <div>
        <h1>Join the Shopping Circle Community</h1>
        <p>seller pictures here</p>
      </div>
      <BottomContainer>
        <AccountOptions>
          <h2>Want to get started?</h2>
          <p>Create an account and start adding items to sell immediately!</p>
          <Link to="/account/add_new">
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
  );
};

const TopContainer = styled.div`
  background-color: ${colors.green};
`;

const BottomContainer = styled.div`
  display: flex;
  background-color: ${colors.yellow};
  justify-content: center;
`;

const AccountOptions = styled.div`
  width: 300px;
`;

// ADD CONDITION FOR IF USER IS LOGGED IN

export default SellingHomepage;
