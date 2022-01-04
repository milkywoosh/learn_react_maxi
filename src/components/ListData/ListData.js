import React from "react";
import Card from "../UI/Card/Card";
import styles from './ListData.module.css';
import Button from "../UI/Button/Button.js";

function ListData(props) {


    return (
        <>
            <ul >
                <Card className={`${styles['main-frame-listData']}`}>
                    <div className={styles.textWrapper}>
                        {`${props.id}. ${props.username} (${props.age}yo)`}
                    </div>
                    <div className={styles.btnWrapper}>
                        <Button type='button' onClick={props.onDelete}>delete </Button>
                    </div>

                </Card>
            </ul>
        </>
    )
}

export default ListData;