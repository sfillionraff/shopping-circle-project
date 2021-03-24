import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductsGrid from "./ProductsGrid";

const SideBarSearch = () => {
  const { selectedCategory } = useParams();
  const [categoryProducts, setCategoryProducts] = useState(null);
  console.log(selectedCategory);

  useEffect(() => {
    console.log("fetching...");
    fetch("/products")
      .then((res) => res.json())
      .then((response) => {
        const sorted = response.data((product) => {
          return product.category === selectedCategory;
        });
        console.log(sorted);
        setCategoryProducts(sorted);
      })
      .catch((error) => console.log(error));
    console.log(categoryProducts);
  }, []);

  //   return <>{categoryProducts && <ProductsGrid data={categoryProducts} />}</>;
  return <>{categoryProducts && <h1>{selectedCategory}</h1>} </>;
};

export default SideBarSearch;
