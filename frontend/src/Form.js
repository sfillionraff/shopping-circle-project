import React from "react";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const Form = ({ formData, formType, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      {formType === "login" ? (
        <>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(event) =>
                handleChange(event.target.value, event.target.name)
              }
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={(event) =>
                handleChange(event.target.value, event.target.name)
              }
            />
          </Label>
          <input type="submit" value="Login" />
        </>
      ) : formType === "createAccount" ? (
        <>
          <Label>
            First Name:{" "}
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Last Name:{" "}
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Email:{" "}
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Password:{" "}
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label> Choose a type:</Label>
          <select
            name="type"
            value={formData.type}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          >
            <option value="type" name="type">
              Type
            </option>
            <option value="buyer" name="type">
              Buyer
            </option>
            <option value="seller" name="type">
              Seller
            </option>
          </select>
          <Label>
            Profile Picture:{" "}
            <Input
              type="image"
              name="imageSrc"
              value={formData.imageSrc}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Input type="submit" value="Create Account" />
        </>
      ) : formType === "addNewItem" ? (
        <>
          <Label>
            Product Name:
            <Input
              type="text"
              value={formData.name}
              name="name"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Brand:
            <Input
              type="text"
              value={formData.brand}
              name="productBrand"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>Select a Category:</Label>
          <select
            name="category"
            value={formData.category}
            onChange={(e) => handleChange(e.target.value, e.target.name)}
          >
            <option value="category" name="category">
              Electronics
            </option>
            <option value="category" name="category">
              Sports
            </option>
            <option value="category" name="category">
              Hobbies
            </option>
            <option value="category" name="category">
              Household
            </option>
            <option value="category" name="category">
              Clothing
            </option>
          </select>
          <Label>
            Price:
            <Input
              type="number"
              value={formData.price}
              name="price"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Description:
            <textarea
              value={formData.description}
              name="description"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Picture:
            <Input
              type="text"
              value={formData.imageSrc}
              name="productImage"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <input type="submit" value="Add Product" />
        </>
      ) : formType === "billingInfo" ? (
        <>
          <Label>
            First Name:{" "}
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Last Name:{" "}
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Email:{" "}
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Street Address
            <Input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Apartment, suite, etc
            <Input
              type="text"
              name="apt"
              value={formData.apt}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            City
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Province
            <Input
              type="text"
              name="province"
              value={formData.province}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Postal Code
            <Input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Country
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
        </>
      ) : formType === "payInfo" ? (
        <>
          <Label>
            Credit Card Number
            <Input
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label placeholder="MM/YY">
            Expiration:
            <Input
              type="number"
              name="expiration"
              value={formData.expiration}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            CVC
            <Input
              type="number"
              name="cvc"
              value={formData.cvc}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <input type="submit" value="Buy Now" />
        </>
      ) : null}
    </form>
  );
};

const Label = styled.label`
  color: white;
  font-weight: bold;
`;

const Input = styled.input`
  border-radius: 12px;
  border-style: none;
  &:focus {
    outline: 1px solid ${colors.green};
  }
`;

export default Form;
