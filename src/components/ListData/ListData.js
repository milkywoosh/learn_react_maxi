import React from "react";
import Card from "../UI/Card/Card";
import styles from './ListData.module.css';
import Button from "../UI/Button/Button.js";

function ListData(props) {

    const listColorByAge = (colorByAge) => {
        if (colorByAge === 'green') {
            return styles.greenFrame
        }
        if (colorByAge === 'blue') {
            return styles.blueFrame
        }
        if (colorByAge === 'yellow') {
            return styles.ylwFrame
        }
    }
    return (
        <>
            <ul >
                <Card className={`${styles.mainFrameListData} ${listColorByAge(props.category)}` }>
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