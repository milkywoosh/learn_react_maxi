import React, { useState, useEffect, useReducer, useRef } from 'react';
import Button from '../../UI/Button/Button';
import styles from './Timer.module.css';

class Counter {
    constructor() {
        this.sec = 0;
    }

    add() {
        return this.sec += 10
    }
    getVal() {
        return this.sec;
    }
    reset() {
        this.sec = 0;
    }
}

const Tes = new Counter();

const initialTime = {
    time: Tes.getVal(),
    isRunning: false
}
const TimeReducer = (state, action) => {
    switch (action.type) {
        case "START":
            return {
                ...state, isRunning: true
            }
        case "STOP":
            return {
                ...state,
                isRunning: action.value
            }
        case "RESET":
            Tes.reset()
            return {
                time: Tes.getVal(),
                isRunning: false
            }
        case "TICK":
            return {
                ...state,
                time: action.value
            }
        default:
            throw new Error();
    }

}


function Timer() {

    const [TimeState, dispatchTime] = useReducer(TimeReducer, initialTime)

    useEffect(() => {
        if (!TimeState.isRunning) {

            return;
        }

        var SetIntrvl = setInterval(() => {
            dispatchTime({
                type: "TICK",
                value: Tes.add()
            })
        }, 1000)


        return (() => {
            console.log(Tes.getVal())
            clearInterval(SetIntrvl)
            console.log('clearance');
        })
    }, [TimeState.isRunning])


    const startHandler = () => {
        dispatchTime(
            {
                type: "START",
            }
        )
    }
    const stopHandler = () => {
        dispatchTime(
            {
                type: "STOP",
                isRunning: false
            }
        )
    }
    const resetHandler = () => {
        dispatchTime(
            {
                type: "RESET",
            }
        )
    }

    return (
        <div>
            <nav id={''}>
                <ul id={styles.ulWrapper}>
                    <li>{TimeState.time}</li>
                    <li>List B</li>
                </ul>
            </nav>
            <div>
                <Button onClick={startHandler}>start</Button>
                <Button onClick={stopHandler}>stop</Button>
                <Button onClick={resetHandler}>reset</Button>

            </div>
        </div >
    )
}

export default Timer;