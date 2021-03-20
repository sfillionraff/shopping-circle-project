import React from "react";
import styled from "styled-components";

import { colors } from "../GlobalStyles";

const Preview = (props) => {
  return (
    <Container>
      {props.data.map((item) => {
        return (
          <div key={item._id}>
            <Image src={item.imageSrc} alt="homepage image" />
          </div>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.yellow};
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 12px;

  &:hover {
    transform: scale(1.2);
  }
`;

export default Preview;

// products is an array of objects:
// ​​
// _id: "a58553a4-a0ee-4f01-b420-13393da74b3e"
// ​​
// brand: "Levis"
// ​​
// category: "Clothes"
// ​​
// description: "Two pairs of ightly worn Levis high-waisted jeans. The size is 30/32."
// ​​
// name: "Levis High-Rise Skinny Jeans"
// ​​
// price: 45
// ​​
// productImage: "https://cdn.cliqueinc.com/posts/287549/best-high-waisted-black-jeans-287549-1591049484434-main.700x0c.jpg"
// ​​
// quantity: 2
// ​​
// sellerId: "S-04"
