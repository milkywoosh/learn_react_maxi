import React, { useState } from "react";
import Card from "../../UI/Card";
import AllDataTable from "../AllDataTable/AllDataTable";
import FilterData from "../FilterData/FilterData";



function OverviewPage(props) {
    const [filteredData, setFilteredData] = useState('')

    const filterHandler =(enterData)=> {
        setFilteredData(enterData)
    }

    const filterDivision = props.sourceData.filter( (data) => {
        return data.division === filteredData;
    })
    return (
        <Card>
            <FilterData 
                selected={filteredData}
                onChangeFilter={filterHandler} />
            <AllDataTable OnDataSupply={filterDivision} />
        </Card>
    )
}


export default OverviewPage;