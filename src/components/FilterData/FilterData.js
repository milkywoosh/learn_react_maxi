import React from "react";

function FilterData(props) {
    // first principle is to filter array

    const filterHandler =(event)=> {
        props.onChangeFilter(event.target.value)
        // console.log(event.target.value)
    }

    return (
        <div>
            <label>Filter by Division</label>
            <select  onChange={filterHandler}>
                <option value=''>Choose one</option>
                <option value='All'>All</option>
                <option value='IT Dept'>IT Dept</option>
                <option value='Finance'>Finance</option>
               
            </select>
        </div>
    )

}

export default FilterData;

