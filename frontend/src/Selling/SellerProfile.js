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
    console.log(seller);
  }, []);

  return (
    <>
      <DetailsComponent item={seller} />
    </>
  );
};

export default SellerProfile;
