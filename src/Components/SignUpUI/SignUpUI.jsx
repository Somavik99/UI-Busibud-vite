import React, { useState } from "react";

const SignUpUI = () => {
  const [SignUpVal, setSignUpVal] = useState({
    user: "",
    email: "",
    P: "",
    phN: "",
    cP: "",
  });
  return (
    <form>
      <div>
        <span>Name:</span>
        <span>
          <input type="text" name="user" />
        </span>
      </div>
      <div>
        <span>Emai:l</span>
        <span>
          <input type="email" name="email" />
        </span>
      </div>
      <div>
        <span>Phone No.:</span>
        <span>
          <input type="number" name="PhN" />
        </span>
      </div>
      <div>
        <span>Password:</span>
        <span>
          <input type="password" name="P" />
        </span>
      </div>
      <div>
        <span>Confirm Password</span>
        <span>
          <input type="password" name="cP" />
        </span>
      </div>
      <div>
        <button>Next</button>
      </div>
    </form>
  );
};

export default SignUpUI;
