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
        // {`${styles['main-frame-form']}`}
        <Card className={`${styles.mainFrameForm}`}>

            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label >Username</label>
                        <input
                            required
                            type='text'
                            onChange={inputNameHandler}
                            value={username}
                            placeholder="your name"
                        />
                    </div>
                    <div>
                        <label>Age(Years)</label>
                        <input
                            required
                            type='text'
                            onChange={inputAgeHandler}
                            value={age}
                            placeholder="your age"
                        />
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button type='submit' className={styles.buttonSubmit}>
                            Add Data
                        </Button>
                    </div>
                </div>
            </form>


        </Card >


    )
}

export default FormInput;


