import React from "react";
import './DataFilter.css';

function DataFilter(props) {
  
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    const className = 'filter-data-wrapper ' + props.className;
    return (

        <div className={className}>
            <div className='filter-data-label'>
                <label > filter by date : </label>                
                    <input
                        required
                        type='date'
                        value={props.selected}
                        onChange={dropDownChangeHandler}
                    />
            </div>

            {/* <div className='filter-data-label'>
                <label className=''> Filter by date</label>
                <span>: </span>
                <select
                    value={props.selected}
                    onChange={dropDownChangeHandler}>
                    {dateArr.map((date) => {
                        return (
                            <option value={date}>{date}</option>
                        )
                    })}
                </select>
            </div> */}
        </div>
    )
}

export default DataFilter;