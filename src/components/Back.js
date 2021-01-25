import React from "react";
import { useHistory } from "react-router-dom";
import "./Back.css";

export const Item = () => {
  let history = useHistory();
  return (
    <>
      <div className="back">
        <button id="back-btn" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </>
  );
};

export default Item;
