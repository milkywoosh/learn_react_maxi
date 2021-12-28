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
                        // const month = (data.birthDate.getMonth()) < 10 ? '0' + String(data.birthDate.getMonth()) : String(data.birthDate.getMonth())
                        const month = data.birthDate.toLocaleString('en-US', {month: '2-digit'});
                        const year = data.birthDate.getFullYear();
                    

                        return (
                            <tbody >
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