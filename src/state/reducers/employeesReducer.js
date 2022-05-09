const employees = (state = 0, action) => {
    switch (action.type) {
        case "hire":
            return state + action.payload;
        case "fire":
            return state - action.payload;
        default:
            return state
    }
};

export default employees;