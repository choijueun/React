import React, { useEffect, useState } from 'react'
import { Badge, Button } from 'reactstrap'

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
        <div style={{margin:15}}>
            <h2></h2>
            <p>
                Functional - age: {props.age} <Badge size="sm" onClick={setAge} pill>setAge</Badge>
            </p>
        </div>
    )
}

export default LifeCycleFunction