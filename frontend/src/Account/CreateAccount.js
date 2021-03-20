import React, { useState } from "react";

const CreateAccount = () => {
  const [accountInfo, setAccountInfo] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    imageSrc: "",
  });
  const handleChange = (value, item) => {
    setAccountInfo({ ...accountInfo, [item]: value });
  };
  return (
    // <form onSubmit={handleSubmit()}>
    <form>
      <label>
        Full Name:{" "}
        <input type="text" value={accountInfo.name} onChange={handleChange} />
      </label>
      <label>
        Email:{" "}
        <input type="email" value={accountInfo.email} onChange={handleChange} />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={accountInfo.password}
          onChange={handleChange}
        />
      </label>
      <label>
        Buyer: <input type="checkbox" onChange={handleChange} />
      </label>
      <label>
        Seller: <input type="checkbox" onChange={handleChange} />
      </label>
      <label>
        Profile Picture:{" "}
        <input
          type="image"
          value={accountInfo.imageSrc}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default CreateAccount;
