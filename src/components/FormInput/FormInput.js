import React, { useState } from "react";
import Button from "../UI/Button/Button.js";
import Card from "../UI/Card/Card.js";
import styles from './FormInput.module.css';

function FormInput(props) {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    const inputNameHandler = (event) => {
        setUsername(event.target.value)
    }
    const inputAgeHandler = (event) => {
        setAge(event.target.value)
    }

    let lengthData = props.getLength;
    const submitHandler = (event) => {
        event.preventDefault();
        lengthData++
        const inputData = {
            
            id: lengthData,
            username: username,
            age: age,
        }
       
        props.onInputData(inputData);
        setUsername('')
        setAge('')
    }

    return (
        <Card className={`${styles['main-frame-form']}`}>

                <form onSubmit={submitHandler}>
                    <div>
                        <label>Username</label>
                        <input
                            required
                            type='text'
                            onChange={inputNameHandler}
                            value={username}
                        />
                    </div>
                    <div>
                        <label>Age(Years)</label>
                        <input
                            required
                            type='text'
                            onChange={inputAgeHandler}
                            value={age}
                        />
                    </div>
                    <div>
                      <Button type='submit'>
                          Add Data
                      </Button>
                    </div>
                </form>

        </Card>


    )
}

export default FormInput;


