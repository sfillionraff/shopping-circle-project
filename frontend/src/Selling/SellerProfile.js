import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsComponent from ".././Shopping/DetailsComponent";

const SellerProfile = () => {
  const { _id } = useParams();
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    fetch(`/sellers/${_id}`)
      .then((res) => res.json())
      .then((response) => setSeller(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {seller !== null && <DetailsComponent item={seller} />}
      {/* <h1>seller profile here</h1>
      <p>{seller.firstName}</p> */}
    </>
  );
};

export default SellerProfile;
