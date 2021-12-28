import React from "react";
import Card from "../../UI/Card";
import EachDataModif from "../EachDataModif/EachDataModif";

function TableDataShow(props) {


    return (
        <Card>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Birth Date</th>
                    </tr>
                </thead>
                <tbody >
                    {props.onSupplyData.map((data, i) => {
                        const date = data.birthDate.toLocaleString('en-US', { day: '2-digit' });
                        const month = data.birthDate.toLocaleString('en-US', { month: '2-digit' });
                        const year = data.birthDate.getFullYear();
                        const TimeInfo = `${year}-${month}-${date}`

                        return (
                            < EachDataModif
                                key={i}
                                id={data.id}
                                fullName={data.fullName}
                                emailPerson={data.emailPerson}
                                dateTime={TimeInfo}
                            />



                        )
                    })}
                </tbody>
            </table>
        </Card>
    )
}

export default TableDataShow;