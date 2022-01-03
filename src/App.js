import React, { useState } from "react";
import styles from './App.module.css';
import ListData from "./components/ListData/ListData";
import NewInput from "./components/NewInput/NewInput";
import Card from "./components/UI/Card/Card";

const DataBase = [

    {
        id: 1,
        username: 'John',
        age: 12,
    },
    {
        id: 2,
        username: 'Ron',
        age: 14,
    }

]


function App(props) {
    const [sourceData, setSourceData] = useState(DataBase)

    const updateDataHandler = (enterData) => {
        setSourceData((prevData) => {
            return [...prevData, enterData]
        })
    }

    return (
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
                        />)
                })}

            </Card>

    )
}

export default App;