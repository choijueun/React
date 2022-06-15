import { createStore } from "redux";
export default createStore(function(state, action) {
    if(state === undefined) {
        return {num: 0}
    }
    if(action.type === 'INCREMENT') {
        return { ...state, num:state.num + action.size }
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())