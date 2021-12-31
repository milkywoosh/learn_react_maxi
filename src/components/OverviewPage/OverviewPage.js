import React, { useState } from "react";
import Card from "../../UI/Card";
import AllDataTable from "../AllDataTable/AllDataTable";
import FilterData from "../FilterData/FilterData";
import ModalPopUp from "../ModalPopUp/ModalPopUp";

function OverviewPage(props) {
    // need state change
    const [chosenCategory, setChosenCategory] = useState('');

    const setCategory = (choice) => {
        setChosenCategory(choice)
    }
    const filteringData = (choice) => {
        return (
            props.sourceData.filter((data) => {
                if (choice === 'All') {
                    return data.division;
                }
                return data.division === choice
            })
        )
    }



    return (
        <Card>
            <FilterData
                onReceiveData={setCategory}
            />
            <AllDataTable OnDataSupply={filteringData(chosenCategory)} />

        </Card>


    )
}


export default OverviewPage;