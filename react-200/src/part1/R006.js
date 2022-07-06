import React, { useEffect } from 'react'

function LifeCycle(props) {
    useEffect(()=>{
        console.log('useEffect 1')
        return ()=>{
            console.log('useEffect 1 return')
        }
    })
    useEffect(()=>{
        console.log('useEffect 2')

        return ()=>{
            console.log('useEffect 2 return')
        }
    }, [])
    useEffect(()=>{
        console.log('useEffect 3')
        return ()=>{
            console.log('useEffect 3 return')
        }
    }, [props])


    return (
    <div>R006</div>
    )
}

export default LifeCycle