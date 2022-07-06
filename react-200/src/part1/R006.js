import React, { useEffect } from 'react'

function LifeCycle(props) {
    useEffect(()=>{
        console.log('useEffect 1')
    })
    useEffect(()=>{
        console.log('useEffect 2')
    }, [])
    useEffect(()=>{
        console.log('useEffect 3')
    }, [props])


    return (
    <div>R006</div>
    )
}

export default LifeCycle