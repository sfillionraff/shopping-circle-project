import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const AccountHomepage = () => {
  const loggedIn = useSelector((state) => state.accountReducer.loggedIn);
  const accountInfo = useSelector((state) => state.accountReducer.accountInfo);
  const [sellerProducts, setSellerProducts] = useState(null);
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
        <div>
          <div>
            <h2>Making an account is easy!</h2>
            <p>
              You can be a buyer or a seller, depending on what you want to do.
            </p>
            <Link to="/account/add_new">
              <button>Create Account</button>
            </Link>
          </div>
          <div>
            <h2>Already a part of the Shopping Circle Community?</h2>
            <Link to="/account/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1>Hi {accountInfo.name}</h1>
            <button>Update Account</button>
          </div>
          <div>
            <h1>What's for sale?</h1>
            <p>Your items</p>
            {sellerProducts && (
              <>
                {sellerProducts.map((product) => {
                  return (
                    <>
                      <img src={product.imageSrc} alt={product.name} />
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountHomepage;

// account reducer state looks like this:
// _id(pin): "2c7651ab-6e70-41b8-bdb7-d84e7887efa7"
// name(pin): "Vanya Hargreeves"
// type(pin): "seller"
// email(pin): "vanya.hargreeves@yahoo.com"
// imageSrc(pin): "https://wallpapercave.com/wp/wp7789323.jpg"
// password(pin): "vanyaHAR1"
