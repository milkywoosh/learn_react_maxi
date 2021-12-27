import React from "react";
import Card from "../../UI/Card";
import EachData from "../EachData/EachData";

function TableDataShow(props) {


    return (
        <EachData onDataSource={props.onSupplyData}/>
    )
}

export default TableDataShow;