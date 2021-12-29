import React from "react";


function EachData(props) {


    return (
       
            <tr >
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.division}</td>
                <td>{props.birthDate}</td>
            </tr>
     

    )
}


export default EachData;