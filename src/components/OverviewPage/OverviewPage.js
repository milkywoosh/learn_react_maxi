import React, { useState } from "react";
import Card from "../../UI/Card";
import AllDataTable from "../AllDataTable/AllDataTable";
import FilterData from "../FilterData/FilterData";



function OverviewPage(props) {
    const [filteredData, setFilteredData] = useState('')

    const filterHandler =(enterData)=> {
        setFilteredData(enterData)
    }

    const filterDivision =(filteringData) => {
        return props.sourceData.filter( (value, index, arr) => {
           if (filteringData === 'All') {
               return value.division
           }
           return value.division === filteringData;
        })
    }
    return (
        <Card>
            <FilterData 
                selected={filteredData}
                onChangeFilter={filterHandler} />
            <AllDataTable OnDataSupply={filterDivision(filteredData)} />
        </Card>
    )
}


export default OverviewPage;