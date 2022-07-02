import React , {useState} from "react";
import DataRow from "../datarow/DataRow";
import "./usertable.css";

// import PaginationButton from "../pagination/PaginationButtons";

//component function
function UserTable({ dataList }) {
  const [listSort, setListSort] = useState(false);
  const [newDataList, setnewDataList] = useState(dataList);

  function dataSorter(){
      setListSort(!listSort);
  }
  return (
    <div style={{ width: "100%" }}>
      <table className="table">
        <tr className="data-field table-header">
          <th onClick={dataSorter}>First Name {listSort ? <button onClick={dataSorter}>▲</button> : <button onClick={dataSorter}>▼</button>} </th>
          <th>Last Name {listSort ? <button onClick={dataSorter}>▲</button> : <button onClick={dataSorter}>▼</button>}</th>
          <th>Age {listSort ? <button onClick={dataSorter}>▲</button> : <button onClick={dataSorter}>▼</button>} </th>
          <th>Email {listSort ? <button onClick={dataSorter}>▲</button> : <button onClick={dataSorter}>▼</button>} </th>
          <th>Website {listSort ? <button onClick={dataSorter}>▲</button> : <button onClick={dataSorter}>▼</button>} </th>
        </tr>
        {dataList && dataList.map((item, index) => {
          return (
            <DataRow
            userData = {dataList}
            key={index}
              id={index}
              fname={item.first_name}
              lname={item.lirst_name}
              age={item.age}
              email={item.email}
              website={item.web}
              city={item.city}
            />
          );
        })}
        
        
      </table>
      
    </div>
  );
}
export default UserTable;
