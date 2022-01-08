import React, { useState, useEffect, useReducer } from "react";
import styles from './FormUseReducer.module.css';

// outsource reducer outside function component
// (state, action) ?? is only them? or is there another form?
// returns the current state which pair with a dispatch method
const initialEmail = {
    value: '',
    isValid: null,
}
const emailReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_EMAIL':
            return {
                value: action.value,
                isValid: action.value.includes('@')
            }
        case 'OUT_FOCUS':
            return {
                value: state.value,
                isValid: state.value.includes('@')
            }
        default:
            return {
                value: '',
                isValid: null,
            }
    }
}

function FormInputReducer(props) {
    const [fullName, setFullName] = useState('');
    // validating email --> with useReducer()
    // note: useReducer() is more advance form of useState()  -> for 'state management'
    const [emailState, dispatchEmail] = useReducer(emailReducer, initialEmail)

    // const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');


    useEffect( ()=> {

        return(()=> {
            // clearance
        })
    }, [])




    const enterFullName = (event) => {
        setFullName(event.target.value)
    }

    const emailEnterHandler = (event) => {
        dispatchEmail(
            {
                type: 'INPUT_EMAIL',
                value: event.target.value
            }
        )
    }
    const emailEnterValidator = () => {
        dispatchEmail(
            {
                type: 'OUT_FOCUS'
            }
        )
    }


    const enterBirthDate = (event) => {
        setBirthDate(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent auto filling

        const inputData = {
            id: Math.random().toString(36).substring(2, 9),
            fullName: fullName,
            emailPerson: emailState.value,
            birthDate: new Date(birthDate),
        }

        // console.log(inputData);
        props.onSaveInputData(inputData)
        setFullName('')
        // setEmail('')

        setBirthDate('')
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input required type='text' value={fullName} onChange={enterFullName} />
                </div>
                <div className={emailState.isValid === false ? styles.inValidData : ''}>
                    <label>Email</label>
                    <input
                        required
                        type='email'
                        value={emailState.value}
                        onChange={emailEnterHandler} onBlur={emailEnterValidator} />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input required type='date' value={birthDate} onChange={enterBirthDate} />
                </div>
                <div>
                    <button type='submit' > Submit</button>
                    <button onClick={props.onCancel}> Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default FormInputReducer;