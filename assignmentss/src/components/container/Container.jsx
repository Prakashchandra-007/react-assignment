import React, { useState, useMemo } from "react";
import "./container.css";
import Header from "../header/Header";
import UserTable from "../usertable/UserTable";
import SearchBox from "../searchbox/SearchBox";
import PaginationButton from '../pagination/PaginationButtons'
const url =
  "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";

function Container() {
  const [pageNumber,setPageNumber] = useState(0);
  const [dataList, setDataList] = useState([]);
  //fetch api data
  async function getData() {
    const response = await fetch(url);
    const res_data = await response.json();
    setDataList(res_data);
  }

  useMemo(()=>{
   getData();

 },[])
  let pageSize = pageNumber +10;
  const pageData = dataList && dataList.slice(pageNumber, pageSize);
  function paginateHandle(page){
    console.log(page-1 )
    setPageNumber(page);
  }
  pageData && console.log(pageData)
  return (
    <div className="container">
      <Header />
      <SearchBox />
      <UserTable dataList={pageData} />
      <PaginationButton data={dataList} onSwitch={paginateHandle} style={{textAlign: 'right'}} />
    </div>
  );
}

export default Container;
