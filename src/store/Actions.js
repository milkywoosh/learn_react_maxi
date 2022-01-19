export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    SUMMARY: 'SUMMARY',
}

export const increase = (data) => {
    const newData = {...data}
    
    return {
        type: ACTIONS.INCREMENT,
        payload: newData.value+=1,
    }
}
export const decreases = (data) => {
    const newData = {...data}
    newData.value-=1
    return {
        type: ACTIONS.INCREMENT,
        payload: newData.value-=1,
    }
}

