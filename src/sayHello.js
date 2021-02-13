import React from 'react';

function HelloJohn() {
    let helloGoodbye = () => {
        console.log('you say yes');
    }

    return (
        <div >
            <h1>Trial - react Dev Ed</h1>
            <button onClick={helloGoodbye}> goodbyee</button>

        </div>
    )
}


// export 'HelloJohn' function to make it visible
export default HelloJohn;