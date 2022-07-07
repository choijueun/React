import React, { useEffect, useState } from 'react'

function CDUfunction(props) {
    // componentDidMount
    useEffect(()=>{
        console.log('Function: componentDidMount()')
        return ()=>{
            console.log('Function: componentWillUnmount 1')
        }
    }, [])
    // render...
    console.log('outside function')
    // componentDidUpate
    useEffect(()=>{
        console.log('Function: componentDidUpdate()');
        return ()=>{
            console.log('Function: componentWillUnmount 2')
        }
    }, [props.age])
    
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

export default CDUfunction