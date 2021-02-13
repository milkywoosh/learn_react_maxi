import React from 'react';

function Count() {
    let arr = [];
    let counting = () => {
        
        for (let i=0; i<5; i++) {
            arr.push(i);
        }
    }
    
    return(
        <div >
            <p>{counting}</p>
        </div>
    )
}

export default Count;