import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ButtonLink from "../ButtonLink";
import { logOutAccount } from "../Reducers/actions";
import Preview from "../Homepage/Preview";
import { colors } from "../GlobalStyles";

const AccountHomepage = () => {
  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const dispatch = useDispatch();
  const history = useHistory();
  const [sellerProducts, setSellerProducts] = useState(null);
  const isProducts = true;
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((response) => {
        const filteredProducts = response.data.filter((product) => {
          return product.sellerId === accountInfo._id;
        });
        setSellerProducts(filteredProducts);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!loggedIn ? (
        <NotLoggedInContainer>
          <div>
            <h2>Making an account is easy!</h2>
            <ButtonLink path={"/account/create"} text={"Create Account"} />
          </div>
          <div>
            <h2>Already a part of the Shopping Circle Community?</h2>
            <ButtonLink path={"/account/login"} text={"Login"} />
          </div>
        </NotLoggedInContainer>
      ) : (
        <div>
          <div>
            <h1>Hi {accountInfo.firstName}!</h1>
            {/* THIS LINK DOESNT WORK */}
            <ButtonLink path={"/update/account"} text={"Update Account"} />
            <Button
              onClick={() => {
                dispatch(logOutAccount());
              }}
            >
              Log out
            </Button>
          </div>
          <SellerProductsContainer>
            <h1>What's for sale?</h1>
            <p>Your products</p>
            {sellerProducts && (
              <>
                <Preview data={sellerProducts} isProducts={isProducts} />
                {/* {sellerProducts.map((product) => {
                  return (
                    <>
                      <img src={product.imageSrc} alt={product.name} />
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </>
                  );
                })} */}
              </>
            )}
          </SellerProductsContainer>
        </div>
      )}
    </>
  );
};

const NotLoggedInContainer = styled.div`
  display: flex;
  background-color: ${colors.yellow};
  width: 75%;
  height: 150px;
  position: relative;
  top: 5%;
  left: 15%;
  justify-content: space-around;
  color: white;
  border-radius: 12px;

  & div {
    margin: 15px;
  }
`;

const Button = styled.button`
  height: 30px;
  width: 150px;
  padding: 0;
`;

const SellerProductsContainer = styled.div`
  & h1 {
    margin: 5px;
  }

  & p {
    margin: 5px;
  }
`;

export default AccountHomepage;

// account reducer state looks like this:
// _id(pin): "2c7651ab-6e70-41b8-bdb7-d84e7887efa7"
// name(pin): "Vanya Hargreeves"
// type(pin): "seller"
// email(pin): "vanya.hargreeves@yahoo.com"
// imageSrc(pin): "https://wallpapercave.com/wp/wp7789323.jpg"
// password(pin): "vanyaHAR1"
