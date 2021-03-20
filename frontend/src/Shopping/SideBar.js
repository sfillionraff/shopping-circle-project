import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SideBar = (props) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    let productCategories = new Set(
      props.data.map((product) => product.category)
    );
    let array = Array.from(productCategories);
    setCategories(array);
  }, []);
  return (
    <Container>
      <h1>Search by Category</h1>
      {categories !== null && (
        <>
          {categories.map((category) => {
            return (
              <>
                <p>{category}</p>
              </>
            );
          })}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 500px;
  background-color: gray;
`;

export default SideBar;
