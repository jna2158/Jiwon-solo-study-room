export const ADD_TO_NUMBER = "ADD_TO_NUMBER";
export const MINUS_TO_NUMBER = "MINUS_TO_NUMBER";

export const addToNumber = (number) => {
    return {
        type: ADD_TO_NUMBER,
        payload: {
            number
        }
    }
}

export const minusToNumber = (number) => {
    return {
        type: MINUS_TO_NUMBER,
        payload: {
            number
        }
    }
}