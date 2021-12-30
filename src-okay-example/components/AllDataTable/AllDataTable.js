import React from "react";
import Card from "../../UI/Card";
import EachData from "../EachData/EachData";



function AllDataTable(props) {

    return (
        <Card>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Division</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* map() here ! */}
                        {props.OnDataSupply.map((data, i) => {
                            const date = data.birthDate.toLocaleString('en-US', {day: '2-digit'});
                            const month = data.birthDate.toLocaleString('en-US', {month: '2-digit'});
                            const year = data.birthDate.getFullYear();
                            const dateInfo = `${year}-${month}-${date}`
                            return (
                                <EachData
                                    key={i}
                                    id={data.id}
                                    name={data.name}
                                    division={data.division}
                                    birthDate={dateInfo}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    )

}

export default AllDataTable;