import React, { useReducer } from 'react';
import Button from '../../UI/Button/Button';

const initValue = {
    value: 0,

}
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1
            }
        case 'DECREMENT':
            return {
                value: state.value - 1
            }
        default:
            return {
                value: 0
            }
    }

}
function Counter() {

    const [number, dispatchNumber] = useReducer(countReducer, initValue)

    // action.type with dispatcher
    const IncrementValue = () => {
        if (number.value >= 0) {
            dispatchNumber(
                {
                    type: 'INCREMENT'
                }
            )
        }

    }
    const DecrementValue = () => {
        if (number.value > 0) {
            dispatchNumber(
                {
                    type: 'DECREMENT'
                }
            )
        } 
    }

    return (
        <div>
            <div>
                <p> {number.value} </p>
            </div>
            <div>
                <Button onClick={ IncrementValue }>Add</Button>
                <Button onClick={ DecrementValue}>Subtract</Button>
            </div>
        </div>
    )
}

export default Counter;