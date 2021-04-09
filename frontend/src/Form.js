import React from "react";
import styled from "styled-components";

import { colors } from "./GlobalStyles";

const Form = ({ formData, formType, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* login form */}
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
          <Button type="submit" value="Login" style={{ top: 150, right: 5 }} />
        </>
      ) : formType === "createAccount" ? (
        // form for creating an account
        <>
          <Label>
            First Name:{" "}
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label>
            Last Name:{" "}
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label>
            Email:{" "}
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label>
            Password:{" "}
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Label> Choose a type:</Label>
          <Select
            name="type"
            value={formData.type}
            onChange={(e) => handleChange(e)}
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
          </Select>
          <Label>
            Profile Picture:{" "}
            <Input
              type="image"
              name="imageSrc"
              value={formData.imageSrc}
              onChange={(e) => handleChange(e)}
            />
          </Label>
          <Button type="submit" value="Create Account" style={{ right: 10 }} />
        </>
      ) : formType === "addNewItem" ? (
        // form for seller to add new item
        <NewItemContainer>
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
              name="brand"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <div>
            <Label>Select a Category:</Label>
            <Select
              style={{ width: 100, margin: 5 }}
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
            </Select>
          </div>
          <div>
            <Label>
              Price:
              <Input
                style={{ width: 50 }}
                type="text"
                value={formData.price}
                name="price"
                onChange={(e) => handleChange(e.target.value, e.target.name)}
              />
            </Label>
          </div>
          <Label>
            Description:
            <Textarea
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
              name="imageSrc"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Button
            type="submit"
            value="Add Product"
            style={{ top: 370, left: 240 }}
          />
        </NewItemContainer>
      ) : formType === "billingInfo" ? (
        // form for billing information on purchase
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
            Street Address:
            <Input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Apartment, suite, etc:
            <Input
              type="text"
              name="apt"
              value={formData.apt}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            City:
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Province:
            <Input
              type="text"
              name="province"
              value={formData.province}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Postal Code:
            <Input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            Country:
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
        </>
      ) : formType === "payInfo" ? (
        // form for payment information
        <>
          <Label>
            Credit Card Number:
            <Input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label placeholder="MM/YY">
            Expiration:
            <Input
              type="text"
              name="expiration"
              value={formData.expiration}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Label>
            CVC:
            <Input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Button
            type="submit"
            value="Buy Now"
            style={{ right: 15, top: 250 }}
          />
        </>
      ) : formType === "updateItem" ? (
        <NewItemContainer>
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
              name="band"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <div>
            <Label>Select a Category:</Label>
            <Select
              style={{ width: 100, margin: 5 }}
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
            </Select>
          </div>
          <div>
            <Label>
              Price:
              <Input
                style={{ width: 50 }}
                type="text"
                value={formData.price}
                name="price"
                onChange={(e) => handleChange(e.target.value, e.target.name)}
              />
            </Label>
          </div>
          <Label>
            Description:
            <Textarea
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
              name="imageSrc"
              onChange={(e) => handleChange(e.target.value, e.target.name)}
            />
          </Label>
          <Button
            type="submit"
            value="Update Product"
            style={{ top: 370, left: 230 }}
          />
        </NewItemContainer>
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
  width: 100%;
  margin: 5px;

  &:focus {
    border: 1px solid ${colors.green};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  outline: none;
  border: none;

  &:focus {
    border: 1px solid ${colors.green};
    outline: none;
  }
`;

const Select = styled.select`
  width: 35%;
  margin: 5px;
`;

const Button = styled.input`
  background-color: ${colors.green};
  color: white;
  padding: 5px;
  border-style: none;
  border-radius: 12px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    cursor: pointer;
  }
`;

const NewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Form;
