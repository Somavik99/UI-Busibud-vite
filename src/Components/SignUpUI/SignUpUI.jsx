import React, { useState } from "react";
import "./SignUpUI.css";
import { useNavigate } from "react-router-dom";
const SignUpUI = () => {
  const [SignUpVal, setSignUpVal] = useState({
    user: "",
    email: "",
    Pass: "",
    PhN: "",
    cPass: "",
  });

  const navigatePage = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    return setSignUpVal({ ...SignUpVal, [name]: [value] });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

const NextPage = ()=>{
  navigatePage("/details")
}

  return (
    <form onSubmit={formSubmit}>
      <h2>Email Details</h2>
      <div>
        <span>Name:</span>
        <span>
          <input
            type="text"
            name="user"
            placeholder="Name"
            value={SignUpVal.user}
            onChange={handleFormChange}
          />
        </span>
      </div>
      <div>
        <span>Emai:</span>
        <span>
          <input
            type="email"
            name="email"
            placeholder="username@gmail.com"
            value={SignUpVal.email}
            onChange={handleFormChange}
          />
        </span>
      </div>
      <div>
        <span>Phone No.:</span>
        <span>
          <input
            type="number"
            name="PhN"
            placeholder="PhoneNumber"
            value={SignUpVal.PhN}
            onChange={handleFormChange}
          />
        </span>
      </div>
      <div>
        <span>Password:</span>
        <span>
          <input
            type="password"
            name="Pass"
            placeholder="Password"
            value={SignUpVal.Pass}
            onChange={handleFormChange}
          />
        </span>
      </div>
      <div>
        <span>Confirm Password</span>
        <span>
          <input
            type="password"
            name="cPass"
            placeholder="Confirm Password"
            value={SignUpVal.cPass}
            onChange={handleFormChange}
          />
        </span>
      </div>
      <div>
        <button onClick={NextPage}>Next</button>
      </div>
    </form>
  );
};

export default SignUpUI;
