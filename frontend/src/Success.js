import React from "react";
import { useParams } from "react-router-dom";

const Success = () => {
  const { type } = useParams();
  console.log(type);

  return <h1>yay!</h1>;
};

export default Success;
