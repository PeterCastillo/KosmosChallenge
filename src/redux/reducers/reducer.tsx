import { combineReducers } from "redux"
import { empployeeReducer } from "./employeeReducer"

const reducer = combineReducers({
    employee : empployeeReducer
})

export default reducer

export type RootState = ReturnType<typeof reducer>