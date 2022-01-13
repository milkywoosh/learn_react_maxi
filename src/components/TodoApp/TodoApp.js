import React, { useState, useReducer } from "react";
// import reducer
import { initStateTodo, todoReducer } from './TodoReducer/ReducerTodo';

import AddTodo from "./AddTodo/AddTodo";
import TodoBtn from "./TodoBtn/TodoBtn";

function TodoApp(props) {

    const [dataState, dispatchState] = useReducer(todoReducer, initStateTodo);
    
    const removeTodo = (data) => {
        dispatchState({ type: 'remove', id: data.id })
    }
    const editTodo = (textInput) => {
        dispatchState({ type: 'edit', id: textInput.id, text: textInput })
    }
    return (
 
            <>
                <AddTodo
                    add={text => dispatchState({ type: 'add', value: text })}
                />
                {dataState.todos.map((data) => {
                    
                    return (<TodoBtn
                        key={data.id}
                        todo={data}
                        remove={()=> dispatchState({type: 'remove', id: data.id})}
                        edit={text => dispatchState({type: 'edit', id: data.id, text: text})}
                    />)
                })}
            </>
    )
}

export default TodoApp;