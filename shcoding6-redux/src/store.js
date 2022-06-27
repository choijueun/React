import { createStore } from "redux";

function store(state, action) {
    if(state === undefined) {
        return {num: 0}
    }
    if(action.type === 'INCREMENT') {
        return { ...state, num:state.num + action.size }
    }
    return state;
}

export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())