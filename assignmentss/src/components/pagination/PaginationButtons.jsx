import React , {useState} from "react";
import "./paginationButton.css";
import Button from "../buttons/Button";
function PaginationButton({data, onSwitch}) {
  const [nButton,setNButton] = useState({start:0,end:5});
  function handleClickPrev(e){
    if(nButton >= 0){
    setNButton(preData=>{
      return{
        start:preData.start-1,
        end:preData.end-1
      }
    })
  }
    
  }
  function handleClickNext(e){
    
    setNButton(preData=>{
      return{
        start:preData.start+1,
        end:preData.end+1
      }
    })
  }

  
  return (
    <div className="pagi-div">
      <Button value='<'  onClick={handleClickPrev} />
     {(data && data.map((items,index)=>{
      return (index<nButton.end && index >nButton.start && <Button key={index} onClick={onSwitch} value={index+1} />)
     }))}
     <Button value='>' onClick={handleClickNext}/>
    </div>
  );
}
export default PaginationButton;
