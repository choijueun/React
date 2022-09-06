import React from 'react'

function CallbackFnc() {
    const logPrint = (param, callback) => {
        console.log('logPrint param: '+param)
        param += param
        callback(param)
    }

    logPrint(1, function(return1){
        console.log('return1: '+return1)
        logPrint(return1, function(return2){
            console.log('return2: '+return2)
        })
    })


    return (
    <div>CallbackFnc</div>
    )
}

export default CallbackFnc