import React from 'react'

import { useSelector, useDispatch } from "react-redux";
import { increaseCount, increseCount } from "../reducers/counter";

function Add() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)

    function increase1(){
        dispatch(increaseCount())
    }

    return (
    <>
        <h1>{count}</h1>
        <button onClick={increase1}>INCREASE</button>
    </>
    )
}

export default Add