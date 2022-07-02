import React from "react";

import "./searchbox.css";
function SearchBox() {
  return (
    <div className="search-box-div">
      <input className="search-box" type="text" value="" />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
export default SearchBox;
