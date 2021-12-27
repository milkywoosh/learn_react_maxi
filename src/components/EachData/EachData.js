import React from "react";
import Card from "../../UI/Card";
// import DateTime from "./DateTime/DateTime";

function EachData(props) {
    

    return (
        <Card>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Birth Date</th>
                        </tr>
                    </thead>
                    {props.onDataSource.map( (data,  i) => {
                        const date = data.birthDate.toLocaleString('en-US', { day: '2-digit' });
                        const eachDate = data.birthDate.getMonth()
                        const month = (eachDate) < 10 ? '0' + String(eachDate) : String(eachDate)
                        const year = data.birthDate.getFullYear();
                    

                        return (
                            <tbody key={i} >
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.fullName}</td>
                                    <td>{data.emailPerson}</td>
                                    <td>{year}-{month}-{date}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </Card>
    )
}

export default EachData;