import React, { useState } from "react";

const CreateAccount = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    imageSrc: "",
  });

  const handleChange = (value, name) => {
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/account/addNew", {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:{" "}
        <input
          type="text"
          name="name"
          value={account.name}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={account.email}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={account.password}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </label>
      <label> Choose a type:</label>
      <select
        name="type"
        value={account.type}
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
      <label>
        Profile Picture:{" "}
        <input
          type="image"
          name="imageSrc"
          value={account.imageSrc}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </label>
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default CreateAccount;
