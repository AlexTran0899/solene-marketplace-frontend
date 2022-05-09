import { combineReducers } from "redux"
import accountReducer from "./accountReducer"
import employeesReducer from "./employeesReducer";
const reducers = combineReducers({
    account: accountReducer,
    employees: employeesReducer
})
export default reducers;