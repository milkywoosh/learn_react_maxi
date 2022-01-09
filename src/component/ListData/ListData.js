import React from 'react';


function ListData(props) {


    return(
        <div>
            
               <li>{props.id}. {props.email} </li> 
            
        </div>
    )
}

export default ListData;