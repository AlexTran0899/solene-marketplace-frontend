import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { employeesActions } from "../state/index"

function Employees() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch()
    const { hireEmployee, fireEmployee } = bindActionCreators(employeesActions, dispatch)

    return (
        <div className="App">
            <h1>this is how much employee you have</h1>
            <h1>{state.employees}</h1>
            <button onClick={() => hireEmployee(1)}>hire 1 employee</button>
            <button onClick={() => fireEmployee(1)}>fire 1 employee</button>
        </div>
    );
}

export default Employees;
