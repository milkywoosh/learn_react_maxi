import React, { useState, useReducer } from "react";
import Button from "../UI/Button/Button.js";
import Card from "../UI/Card/Card.js";
import styles from './FormInput.module.css';

const initPersonalData = {

    name: '',
    age: 0,
    category: null,
    tes: '',
    // green, blue, red --> for list

}
const reducerPersonalData = (state, action) => {
    const getColorAge = (age) => {
        if (age < 10) {
            return 'green'
        }

        if (age > 10 && age < 15) {
            return 'blue'
        }
        if (age > 15) {
            return 'yellow'
        }
    }
    switch (action.type) {
        case 'INPUT_USERNAME':
            return {
                ...state,
                name: action.valueUsername,
                tes: action.nameWhat,

            }
        case 'INPUT_AGE':
            return {
                ...state,
                age: action.valueAge,
                category: getColorAge(action.valueAge)
            }

        default:
            return state

    }
}

function FormInput(props) {
    const [personalData, dispatchPersonalData] = useReducer(reducerPersonalData, initPersonalData)

    useState(() => {
        console.log(personalData.name)
    }, [personalData.name])


    /*
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    */

    const inputNameHandler = (event) => {
      
        dispatchPersonalData(
            {
                type: 'INPUT_USERNAME',
                valueUsername: event.target.value,
                nameWhat: event.target.name,
            }
        )
    }
    const inputAgeHandler = (event) => {
        // setAge(event.target.value)
        dispatchPersonalData(
            {
                type: 'INPUT_AGE',
                valueAge: event.target.value
            }
        )
    }

    let lengthData = props.getLength;
    const submitHandler = (event) => {
        event.preventDefault();
        lengthData++
        const inputData = {

            id: lengthData,
            username: personalData.name,
            age: personalData.age,
            category: personalData.category,
            tes: personalData.tes,
        }
        console.log('check: ', inputData.username)
        props.onInputData(inputData);
        // setUsername('')
        // setAge('')
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
                            value={personalData.name}
                            placeholder="your name"
                        />
                    </div>
                    <div>
                        <label>Age(Years)</label>
                        <input
                            required
                            type='text'
                            onChange={inputAgeHandler}
                            value={personalData.age}
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


