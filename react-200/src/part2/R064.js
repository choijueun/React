import React, { useState } from 'react'

function PromiseFnc() {
    const [data, setData] = useState()
    const promiseFn = ()=>{
        new Promise(resolve=>{
            setTimeout(()=>{
                resolve('react')
            }, 1500)
        }).then(rs=>{
            console.log('1.',rs)
            return rs+200
        }).then(rs=>{
            console.log('2.',rs)
            return rs+'제'
        }).then(rs=>{
            console.log('3.',rs)
        })
    }

    return <>
        <h5>{data}</h5>
        <button onClick={promiseFn}>PROMISE</button>
    </>
}

export default PromiseFnc