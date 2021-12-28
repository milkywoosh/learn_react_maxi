import React from "react";
import Card from "../../UI/Card";
// import DateTime from "./DateTime/DateTime";

function EachDataModif(props) {


    return (
        <Card>
            <div>
                <table>
                    <thead  >
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Birth Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <td>{props.id}</td>
                            <td>{props.fullName}</td>
                            <td>{props.emailPerson}</td>
                            <td>{props.dateTime}</td>
                        </tr>
                    </tbody>


                </table>
            </div>
        </Card>
    )
}

export default EachDataModif;