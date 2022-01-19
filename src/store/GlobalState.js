import React, { useReducer } from 'react';
import { reducer } from './Reducer';

const initialState = {
    value: 0,
    summary: {
        odd: 0,
        even: 0,
    },
}
// export to another component as global data state
const DataContext = React.createContext(initialState);

// provider data state
const ProviderData = (props) => {
    const { Provider } = DataContext;
    const [currState, dispatch] = useReducer(reducer, initialState);
    const DataProvider = { currState, dispatch }
    return (
        <Provider value={DataProvider}>
            {props.children}
        </Provider>
    )

}

export { DataContext, ProviderData }
