import React from 'react';

function CounterReducer() {
    
    return (
        <>
            <Card className={styles.countMainWrapper}>
                <Card className={styles.countWrapper}>
                    <Button className={styles.fontCount}>Increment</Button>
                </Card>
                <Card className={styles.dynamicCountWrapper}>
                    <div className={styles.numberCount}>3</div>
                </Card>

                <Card className={styles.countWrapper}>
                    <Button className={styles.fontCount}>Decrement</Button>
                </Card>
            </Card>
        </>
    )
}
