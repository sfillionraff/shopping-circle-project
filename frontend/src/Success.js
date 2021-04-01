import React from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  const { type } = useParams();

  return (
    <>
      {type === "purchase" ? (
        <>
          <h1>Thank you for your order</h1>
          <p>You will receive an order confirmation shortly</p>
        </>
      ) : type === "product" ? (
        <>
          <h1>Item has been updated!</h1>
        </>
      ) : null}
    </>
  );
};

export default Success;
