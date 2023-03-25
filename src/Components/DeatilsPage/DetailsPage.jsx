import React from "react";
import { useNavigate } from "react-router-dom";
const DetailsPage = () => {
  const navPage = useNavigate();
  const AddSubmit = (e) => {
    e.preventDefault();
  };

  const PreviousPage = () => {
    navPage("/");
  };

  const NextPageUi = () => {
    navPage("/ProfilePlan");
  };

  return (
    <form onSubmit={AddSubmit}>
      <h2>Address Details</h2>
      <div>
        <span>Country:</span>
        <span>
          <input type="text" name="Country" />
        </span>
      </div>
      <div>
        <span>State:</span>
        <span>
          <input type="text" name="state" />
        </span>
      </div>
      <div>
        <span>City:</span>
        <span>
          <input type="text" name="city" />
        </span>
      </div>
      <div>
        <span>Street:</span>
        <span>
          <input type="text" name="street" />
        </span>
      </div>
      <div>
        <button onClick={PreviousPage}>Previous</button>
        <button onClick={NextPageUi}>Next</button>
      </div>
    </form>
  );
};

export default DetailsPage;
