import React from 'react'
import { createStore } from 'redux'

export default createStore(function(state, action){
    if(action.type === 'App') {
        return {number: action.number}
    }
    return state;
})