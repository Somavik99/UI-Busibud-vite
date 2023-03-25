import React from "react";

const SignUpUI = () => {
  return (
    <from>
      <div>
        <span>Name:</span>
        <span>
          <input type="text" name="name" />
        </span>
      </div>
      <div>
        <span>Email</span>
        <span>
          <input type="email" name="email" />
        </span>
      </div>
    </from>
  );
};

export default SignUpUI;
