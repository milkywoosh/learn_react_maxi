import React from "react";


function EachDataModif(props) {


    return (
      
            <tr>
                <td>{props.id}</td>
                <td>{props.fullName}</td>
                <td>{props.emailPerson}</td>
                <td>{props.dateTime}</td>
            </tr>
        
    )
}

export default EachDataModif;