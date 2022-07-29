import React, { useEffect, useState } from 'react'

function LifeCycleFunction(props) {
    console.log('1. outside function')

    // componentDidMount
    useEffect(()=>{
        console.log('2. Function: componentDidMount()')
        return ()=>{
            console.log('3. Function: componentWillUnmount 1')
        }
    }, [])
    // componentDidUpate
    useEffect(()=>{
        console.log('2. Function: componentDidUpdate()');
        return ()=>{
            console.log('3. Function: componentWillUnmount 2')
        }
    }, [props])
    
    const setAge = ()=>{
        props.onChangeAge(27);
    }

    return (
        <>
            <h2>F - age: {props.age}</h2>
            <input type="button" value="setAge" onClick={setAge}></input>
        </>
    )
}

export default LifeCycleFunction