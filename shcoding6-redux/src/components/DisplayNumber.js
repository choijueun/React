import React, { useState } from 'react'
import store from '../store';

function DisplayNumber() {
    const [num, setNum] = useState(store.getState().num);
    store.subscribe(function(){
        setNum(store.getState().num);
    })
    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" value={num} readOnly></input>
        </div>
    )
}

export default DisplayNumber