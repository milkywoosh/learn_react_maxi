import React from "react";
import DataShow from "../DataShow/DataShow";

function AllDataShow() {

    const DataInput = [
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'MAP',
            currentStock: 22,
            lastUpdate: new Date(2021, 2, 10)
        },
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'TADA',
            currentStock: 22,
            lastUpdate: new Date(2022, 2, 20)
        },
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'CCMU',
            currentStock: 22,
            lastUpdate: new Date(2020, 2, 1)
        },
        {
            id: Math.random().toString(36).substring(2,9),
            client: 'ANTAM',
            currentStock: 25,
            lastUpdate: new Date(2022, 2, 1)
        },
    ]

    return(
        <div>
            <DataShow onSetData={DataInput}/>
        </div>
    )
}

export default AllDataShow;