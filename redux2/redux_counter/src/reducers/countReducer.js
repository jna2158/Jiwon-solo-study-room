import { ADD_TO_NUMBER, MINUS_TO_NUMBER } from "../actions/index"

const countReducer = (state = 1, action) => {
    switch (action.type) {
        case ADD_TO_NUMBER:
            return ++state
        case MINUS_TO_NUMBER:
            return --state
        default:
            return state
    }

}

export default countReducer;