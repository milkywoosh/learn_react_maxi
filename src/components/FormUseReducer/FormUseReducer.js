import React, { useState, useEffect, useReducer } from "react";

// outsource reducer outside function component
// (state, action) ?? is only them? or is there another form?
const emailReducer = (state, action) => {
    // returns the current state which pair with a dispatch method
    switch (action.type) {
        case 'EMAIL_INPUT':
            return {
                value: action.val,
                isValid: action.val.includes('@'),
            };
        case 'INPUT_BLUR':
            return {
                value: state.value,
                isValid: state.value.includes('@')
            }

    }
}


function FormInput(props) {
    const [fullName, setFullName] = useState('');
    // validating email --> with useReducer()
    // const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');


    // note: useReducer() is more advance form of useState()  -> for 'state management'
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })


    useEffect(() => {

        return (() => {
            console.log('CLEAN UP!')
        })
    }, [])

    const enterFullName = (event) => {
        setFullName(event.target.value)
    }
    const enterEmail = (event) => {
        // setEmail(event.target.value)
    }
    const enterBirthDate = (event) => {
        setBirthDate(event.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // prevent auto filling

        const inputData = {
            id: Math.random().toString(36).substring(2, 9),
            fullName: fullName,
            emailPerson: email,
            birthDate: new Date(birthDate),
        }

        // console.log(inputData);
        props.onSaveInputData(inputData)
        setFullName('')
        setEmail('')
        setBirthDate('')
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input required type='text' value={fullName} onChange={enterFullName} />
                </div>
                <div>
                    <label>Email</label>
                    <input required type='email' value={email} onChange={enterEmail} />
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

export default FormInput;