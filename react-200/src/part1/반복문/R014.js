import React from 'react'

function ForEach() {
    const arr = [1, 3, 6, 7, 9];
    const newArr1 = [];
    const newArr2 = [];

    /* for */
    for(let i=0; i<arr.length; i++) {
        newArr1.push(arr[i]);
    }
    /* forEach */
    arr.forEach((el)=>{
        newArr2.push(el);
    })

    console.log('newArr1', newArr1)
    console.log('newArr2', newArr2)

    return (
        <div>ForEach</div>
    )
}

export default ForEach