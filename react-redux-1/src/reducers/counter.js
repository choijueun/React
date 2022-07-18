// action 중복 방지: 액션 이름 앞에 파일명
const INCREASE = 'COUNTER/INCREASE'
const DECREASE = 'COUNTER/DECREASE'

export const increaseCount = count => ( {type: INCREASE, count} )
export const decreaseCount = count => ({type: DECREASE, count})

const initialState = {
    count: 0
}

const counter = (state = initialState, action)=>{
    switch(action.type) {
        case INCREASE:
            return {...state, count: state.count + 1}
        case DECREASE:
            return { ...state, count: state.count -1}
        // default 없으면 첫 state에 count=undefined니 꼭 default!!
        default:
            return state;
    }
}
export default counter