import React from "react";
import './YearDataFilter.css';

function YearDataFilter(props) {
    const dropDownChangeHandler =(event) => {
        props.onChangeFilter(event.target.value);
    }
    
   
    const className = 'filter-year-wrapper ' + props.className;
    return(
        <div className={className}>
            <div className='filter-year-label'>
                <label className=''> Filter by year periode</label>
                <span>: </span>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    )
}

export default YearDataFilter;