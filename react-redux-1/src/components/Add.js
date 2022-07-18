import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../reducers/counter";

function Add() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)

    function increase1(){
        dispatch(increaseCount())
    }
    function decrease1(){
        dispatch(decreaseCount())
    }

    return (
    <>
        <h1>{count}</h1>
        <button onClick={increase1}>INCREASE</button>
        <button onClick={decrease1}>DECREASE</button>
    </>
    )
}

export default Add