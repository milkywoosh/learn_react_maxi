import React, { useReducer } from 'react';

import Button from '../../UI/Button/Button';
import styles from './FormInput.module.css';

const initEmail = {
    id: Math.random().toString(36).substring(2,9),
    email: '',
    isValid: null,
}
const emailRdcr = (state, action) => {
    if (action.type === 'INPUT_EMAIL') {
        return {
            id: Math.random().toString(36).substring(2,9),
            email: action.value,
            isValid: action.value.includes('@')
        }
    }
    if (action.type === 'VALIDATE_EMAIL') {
        return {
            id: Math.random().toString(36).substring(2,9),
            email: state.email,
            isValid: state.email.includes('@')
        }
    }
    // return {...state, email: '', isValid: null}
}

function FormInput(props) {
    const [emailState, dispatchEmail] = useReducer(emailRdcr, initEmail)

    const emailInputHandler = (event) => {
        dispatchEmail(
            {
                type : 'INPUT_EMAIL',
                value : event.target.value,
            }
        )
    }
    const emailValidatorHandler = () => {
        dispatchEmail(
            {
                type: 'VALIDATE_EMAIL',
            }
        )
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(emailState)
        props.onSupply(emailState)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className={emailState.isValid === false ? `${styles.validEmail}` : ''}>
                    <label htmlFor='email'> email </label>
                    <input
                        required
                        id='email'
                        type='text'
                        value={emailState.email}
                        onChange={emailInputHandler} 
                        onBlur={emailValidatorHandler}/>
                </div>
                <div>
                    {/* <Button type='submit'> Submit </Button> */}
                    <button type='submit'> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default FormInput;