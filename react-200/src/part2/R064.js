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
    const rejectFn = ()=>{
        new Promise((resolve,reject)=>{
            // resolve("SUCCESS INFO")
            reject(Error("ERROR INFO"))
        }).then(rs=>{
            console.log('then:',rs)
        }).catch(rs=>{
            console.log('catch:',rs)
        })
    }

    return <>
        <h5>{data}</h5>
        <button onClick={promiseFn}>PROMISE</button>
        <button onClick={rejectFn}>REJECT</button>
    </>
}

export default PromiseFnc