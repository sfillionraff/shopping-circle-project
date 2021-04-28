import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../GlobalStyles";

const Preview = ({ data, isProducts }) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Link
            to={isProducts ? `/product/${item._id}` : `/selling/${item._id}`}
          >
            <div key={item._id}>
              {isProducts && item.status === "unavailable" ? (
                <UnavailImage src={item.imageSrc} alt="homepage image" />
              ) : (
                <Image src={item.imageSrc} alt="homepage image" />
              )}
            </div>
          </Link>
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

const UnavailImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 50px;
  border-radius: 12px;
  opacity: 0.2;
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
