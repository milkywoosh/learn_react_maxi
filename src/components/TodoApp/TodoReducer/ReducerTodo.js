
export const initStateTodo = {
    counter: 2,
    todos: [
        {
            id: 1,
            text: 'one'
        },
        {
            id: 2,
            text: 'two'
        }
    ],
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            {
                const newCounter = state.counter+1;
                const newTodo = {
                    id: newCounter,
                    text: action.value
                }
                return {
                    counter: newCounter,
                    todos: [...state.todos, newTodo]
                }
            }
        case 'edit':
            {
                const idx = state.todos.findIndex( (t) => t.id === action.id);
                // copy value 
                const todo = Object.assign({}, state.todos[idx]);
                todo.text = action.text;
                const todos = Object.assign([], state.todos);
                todos.splice(idx, 1, todo);
                return {
                    counter: state.counter,
                    todos: todos,
                }

            }
        case 'remove':
            {
                const idx = state.todos.findIndex( (t) => t.id === action.id);
                const todo = Object.assign([], state.todos);
                todo.splice(idx, 1);
                return {
                    counter: state.counter,
                    todos: todo,
                }
            }
        default:
            return state;
    }
}