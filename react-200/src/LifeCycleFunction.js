import React, { useEffect } from 'react'
import { Badge } from 'reactstrap'

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
        <div>
            <h2>LifeCycleFunction</h2>
            <p>
                Functional - age: {props.age} <Badge size="sm" onClick={setAge} pill>setAge</Badge>
            </p>
        </div>
    )
}

export default LifeCycleFunction