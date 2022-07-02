import React from "react";
import "./button.css";

function Button({ value, onClick }) {
  function handleClick(e){

    const pageNumber = parseInt(e.target.innerHTML)
    onClick(pageNumber)
  }
  return <button onClick={handleClick} className="page-btn">{value}</button>;
}
export default Button;
