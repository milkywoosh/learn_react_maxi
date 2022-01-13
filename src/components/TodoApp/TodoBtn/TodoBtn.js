import React, { useState } from "react";

function TodoBtn(props) {
    const [mode, setMode] = useState('list');
    const [text, setText] = useState(props.todo.text)

    const inputText = (event) => {
        setText(event.target.value);
    }
    const cancelEdit = () => {
        setMode('list')
    }
    return (
        <div>
            {mode === 'list' ? <div>
                <span>{props.todo.text}</span>
                <button onClick={props.remove}>remove</button>
                <button onClick={() => setMode('edit')}>edit</button>
            </div> : <div>
                <input value={text} onChange={inputText} />
                <button onClick={() => { props.edit(text); setMode('list') }}>save</button>
                <button onClick={cancelEdit}>cancel</button>
            </div>}


        </div>
    )
}

export default TodoBtn;