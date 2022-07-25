import React from 'react'

function Map() {
    const arr = [8, 2, 3, 6];

    const mapArr1 = arr.map(x => x);
    console.log('# mapArr1');
    console.log(mapArr1);
    
    const mapArr2 = arr.map(x => x+1);
    console.log('# mapArr2');
    console.log(mapArr2);

    const objArr = [{key: 'react', value: 200},
                    {key: '리액트', value: 'Two Hunderds'}]

    const objArr2 = objArr.map((obj, index)=>{
        console.log(`# objArr - ${index}`)
        console.log(obj)
        console.log(obj.key, obj.value)
        console.log(index)
        return {value: obj.value, idx: index}
    })
    console.log('# objArr2')
    console.log(objArr2)

    return (
        <div>Map</div>
    )
}

export default Map