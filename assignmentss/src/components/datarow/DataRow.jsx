import React from "react";
import "./datarow.css";
import {Link } from "react-router-dom";
function DataRow({ id,fname, lname, age, email,city, website,userData }) {
  let path =`/user/${id}?fname=${fname}&lname=${lname}&age=${age}&email=${email}&city=${city}&website=${website}&company=${userData[id].company_name}&state=${userData[id].state}&zip=${userData[id].zip}`;
  return (
    <tr className="data-row data-field">
      <Link to={path}>
        <td>{fname}</td>
      </Link>
      <td>{lname}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>
        <a href={website}>{website}</a>
      </td>
    </tr>
  );
}
export default DataRow;
