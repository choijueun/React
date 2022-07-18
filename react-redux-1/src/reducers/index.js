import { combineReducers } from "redux"
import counter from './counter'

// 여러 reducer를 하나로 묶어준다
const rootReducer = combineReducers({
    counter
})

export default rootReducer;