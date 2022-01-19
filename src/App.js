import React, { useState } from "react";

import styles from './App.module.css';
import ListData from "./components/ListData/ListData";
import NewInput from "./components/NewInput/NewInput";
import TodoApp from "./components/TodoApp/TodoApp";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import CounterReducer from './components/CounterReducer/CounterReducer';
import { ProviderData } from "./store/GlobalState";

const DataBase = [

    {
        id: 1,
        username: 'John',
        age: 16,
        category: 'yellow',
    },
    {
        id: 2,
        username: 'Ron',
        age: 14,
        category: 'blue',
    }

]


function App(props) {
    const [sourceData, setSourceData] = useState(DataBase)

    const updateDataHandler = (enterData) => {
        setSourceData((prevData) => {
            return [...prevData, enterData]
        })
    }

    function removeHandler(id) {
        const newSource = sourceData.filter((item) => item.id !== id)
        setSourceData(newSource)
    }



    return (
        <ProviderData>
            <Card className={styles.app}>

                <NewInput onUpdate={updateDataHandler}
                    lenInfo={sourceData.length}
                />

                {sourceData.map((data, i) => {
                    return (
                        <ListData
                            key={i}
                            id={data.id}
                            username={data.username}
                            age={data.age}
                            category={data.category}

                            //  distinguish between ()=> AnyFunction() and 
                            // Anyfunction 'only' ??
                            onDelete={() => removeHandler(data.id)}
                        />)
                })}
                <TodoApp />

            </Card>
            <Card className={styles.countMainWrapper}>
                <CounterReducer />
            </Card>
        </ProviderData>
    )
}

export default App;