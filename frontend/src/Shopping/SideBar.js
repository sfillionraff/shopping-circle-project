import React, { useEffect, useState } from "react";

const SideBar = (props) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let productCategories = new Set(
      props.data.map((product) => product.category)
    );
    setCategories(productCategories);
  }, []);
  return (
    <>
      <h1>Search by Category</h1>
      {categories !== null && (
        <>
          {categories.forEach((category) => {
            return <p>{category}</p>;
          })}
        </>
      )}
    </>
  );
};

export default SideBar;
