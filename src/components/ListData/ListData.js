import React from "react";
import Card from "../UI/Card/Card";
import styles from './ListData.module.css';


function ListData(props) {

    return (
        <>
            <ul >
                <Card className={`${styles['main-frame-listData']}`}>

                    {`${props.id}. ${props.username} (${props.age}yo)`}

                </Card>
            </ul>
        </>
    )
}

export default ListData;