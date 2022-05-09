import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { bankAction } from "../state/index"

function Bank() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch()
    const { depositMoney, withdrawMoney } = bindActionCreators(bankAction, dispatch)

    return (
        <div className="App">
            <h1>this is your bank account</h1>
            <h1>{state.account}</h1>
            <button onClick={() => depositMoney(1000)}>deposit</button>
            <button onClick={() => withdrawMoney(1000)}>withdraw</button>
        </div>
    );
}

export default Bank;
