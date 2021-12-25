import React from "react";
import DataShow from "../DataShow/DataShow";

function AllDataShow() {

    const DataInput = [
        {
            id: 1,
            client: 'MAP',
            currentStock: 22,
            lastUpdate: '01-01-1000'
        },
        {
            id: 2,
            client: 'TADA',
            currentStock: 22,
            lastUpdate: '01-01-1000'
        },
        {
            id: 3,
            client: 'CCMU',
            currentStock: 22,
            lastUpdate: '01-01-1000'
        },
    ]

    return(
        <div>
            <DataShow onSetData={DataInput}/>
        </div>
    )
}

export default AllDataShow;