import React from "react";
import DataShow from "../DataShow/DataShow";

function AllDataShow() {

    const DataInput = [
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'MAP',
            currentStock: 22,
            lastUpdate: new Date(2021, 1, 1)
        },
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'TADA',
            currentStock: 22,
            lastUpdate: new Date(2022, 1, 1)
        },
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'CCMU',
            currentStock: 22,
            lastUpdate: new Date(2020, 1, 1)
        },
    ]

    return(
        <div>
            <DataShow onSetData={DataInput}/>
        </div>
    )
}

export default AllDataShow;