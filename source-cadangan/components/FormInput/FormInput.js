import React, { useState } from "react";


function FormInput(props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const enterFullName = (event) => {
        setFullName(event.target.value)
    }
    const enterEmail = (event) => {
        setEmail(event.target.value)
    }
    const enterBirthDate = (event) => {
        setBirthDate(event.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // prevent auto filling

        const inputData = {
            id: Math.random().toString(36).substring(2,9),
            fullName: fullName,
            emailPerson: email,
            birthDate: birthDate
        }

        // console.log(inputData);
        props.onSaveInputData(inputData)
        setFullName('')
        setEmail('')
        setBirthDate('')
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input required type='text' value={fullName} onChange={enterFullName}  />
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
                    <button type='submit'> Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormInput;