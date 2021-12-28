import React from "react";
import Card from "../../UI/Card";
import EachData from "../EachData/EachData";

function TableDataShow(props) {


    return (
        <Card>
            <EachData onDataSource={props.onSupplyData} />
        </Card>
    )
}

export default TableDataShow;