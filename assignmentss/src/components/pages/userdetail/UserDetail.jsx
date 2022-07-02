import React from "react";
import {useSearchParams,Link} from 'react-router-dom';
import './userdetail.css'
import Header from "../../header/Header"
function UserDetail() {
  let [searchParams, setSearchParams] = useSearchParams();
  let userData = searchParams.get('data')
  console.log(userData);
  return <div  className="userdetail">
    <div className="deatils_Header">
      <Link to="/" ><i style={{fontSize:"2rem"}} className="fa fa-arrow-left"></i></Link>
      <h1 style={{marginLeft:'3%'}}>Details:{searchParams.get('fname')} {searchParams.get('lname')} </h1>
    </div>
    <div className="items-userInfo"><h1>First Name:{searchParams.get('fname')}</h1></div>
    <div className="items-userInfo"><h1>Last Name: {searchParams.get('lname')}</h1></div>
    <div className="items-userInfo"><h1>Company Name:{searchParams.get('company')}</h1></div>
    <div className="items-userInfo"><h1>city: {searchParams.get('city')}</h1></div>
    <div className="items-userInfo"><h1>State: {searchParams.get('state')}</h1></div>
    <div className="items-userInfo"><h1>Zip: {searchParams.get('zip')}</h1></div>
    <div className="items-userInfo"><h1>Email: {searchParams.get('email')}</h1></div>
    <div className="items-userInfo"><h1>Web: {searchParams.get('website')}</h1></div>
    <div className="items-userInfo"><h1>Age: {searchParams.get('age')}</h1></div>
  </div>;
}

export default UserDetail;
