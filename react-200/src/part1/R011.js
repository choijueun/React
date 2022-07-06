import React, { useEffect } from 'react'

function SpreadOperator() {
    useEffect(()=>{
        /* ARRAY */
        const arr1 = ['1', '2']
        const arr2 = ['3', '4']

        const sumArr = [].concat(arr1, arr2)
        console.log('sum1: ',sumArr)
        
        console.log('spread operator 1: ', ...arr1)             // '1', '2'
        console.log('spread operator 2: ', ...arr2)             // '3', '4'
        console.log('spread operator 3: ', [...arr1, ...arr2])  // '1', '2', '3', '4'

        // ['1', '2', '3', '4']
        const [num1, num2, ...remain] = sumArr
        console.log('num1: ', num1)     // '1'
        console.log('num2: ', num2)     // '2'
        console.log('remain: ', remain) // ['3', '4']


        /* OBJECT */
        const obj1 = {key1: 'val1', key2: 'val2'}
        const obj2 = {key3: 'val3', key4: 'val4'}

        const sumObj1 = Object.assign({}, obj1, obj2)
        console.log('sumObj1: ',sumObj1)

        const sumObj2 = {...obj1, ...obj2}
        console.log('sumObj2: ',sumObj2)

        const {key1, key4, ...others} = sumObj1
        console.log('key1: ',key1)
        console.log('key4: ',key4)
        console.log('others: ',others)

    }, [])

    return (
    <div>SpreadOperator</div>
    )
}

export default SpreadOperator