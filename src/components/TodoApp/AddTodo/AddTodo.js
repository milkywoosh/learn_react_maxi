import React, { useState } from 'react';

function AddTodo(props) {
    const [text, setText] = useState('');

    const typeText = (event) => {
        setText(event.target.value)
    }
    const submitText = (text) => {
       props.add(text)
       setText('');
    }
    return (
        <div>
            <input value={text} onChange={typeText} />
            {/* onClick bener ga?? */}
            <button
                onClick={()=> submitText(text)}
            > submit</button>
        </div>
    )
}

export default AddTodo;