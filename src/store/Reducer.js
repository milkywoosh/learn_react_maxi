import { ACTIONS } from "./Actions"

export const reducer =(state, action)=> {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                ...state,
                value: action.payload,
            }
        case ACTIONS.DECREMENT:
            return {
                ...state,
                value: action.payload,
            }
        default: 
            return state;
    }
}