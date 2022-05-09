export const hireEmployee = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "hire",
            payload: amount
        })
    }
}

export const fireEmployee = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "fire",
            payload: amount
        })
    }
}