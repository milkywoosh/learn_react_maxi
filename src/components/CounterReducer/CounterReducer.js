import React, { useContext } from 'react';
import styles from './CounterReducer.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { DataContext } from '../../store/GlobalState';
import { increase } from '../../store/Actions';

function CounterReducer() {

    const { currState, dispatch } = useContext(DataContext);
    const {value, summary } = currState;
    return (
        <>

            <Card className={styles.countWrapper}>
                <Button
                    onClick={()=> dispatch(increase(currState))}
                    className={styles.fontCount}

                >Increment</Button>
            </Card>
            {/* if even -> green 
                    else if odd -> sky blue
                */}
            <Card className={styles.dynamicCountWrapper}>
                <div className={styles.numberCount}>{value}</div>
            </Card>

            <Card className={styles.countWrapper}>
                <Button className={styles.fontCount}>Decrement</Button>
            </Card>

        </>
    )
}

export default CounterReducer;