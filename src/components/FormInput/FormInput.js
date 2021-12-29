import React, { useState } from "react";


function FormInput(props) {

    const [name, setName] = useState('')
    const [division, setDivision] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const inputNameHandler = (event) => {
        setName(event.target.value)
    }
    const inputDivisionHandler = (event) => {
        setDivision(event.target.value)
    }
    const inputDateBirthHandler = (event) => {
        setBirthDate(event.target.value)
    }

    const inputSubmitHandler = (e) => {
        e.preventDefault();

        const DataInput = {
            id: Math.random().toString(36).substring(2, 9),
            name: name,
            division: division,
            birthDate: new Date(birthDate),
        }

        // console.log(DataInput);
        props.onAddDataInput(DataInput)
        setName('')
        setDivision('')
        setBirthDate('')
    }

    return (
        <div>
            <form onSubmit={inputSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input
                        required
                        type='text'
                        value={name}
                        onChange={inputNameHandler}
                        placeholder="type your name" />
                </div>
                <div>
                    <label>Division</label>
                    <input required
                        type='text'
                        value={division}
                        onChange={inputDivisionHandler}
                        placeholder="division name" />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input required 
                    type='date' 
                    min='2020-01-01'
                    max='2021-12-30'
                    value={birthDate} 
                    onChange={inputDateBirthHandler} 
                    placeholder="birth date" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button onClick={props.onClick}> Cancel </button>
                </div>
            </form>
        </div>
    )
}

export default FormInput;