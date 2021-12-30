import React from "react";

function FilterData(props) {
    // first principle is to filter array
    const ChooseOptionHandler =(event)=> {
        props.onReceiveData(event.target.value);
    }


    return (
       <div>
           <select onChange={ChooseOptionHandler}>
               <option value=''>Choose one</option>
               <option value='All'>All</option>
               <option value='IT Dept'>IT Dept</option>
               <option value='Finance'>Finance</option>
           </select>
       </div>
    )

}

export default FilterData;

