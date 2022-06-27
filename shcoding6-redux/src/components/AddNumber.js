import React, { useState } from 'react';

function AddNumber(props) {
    const [size, setSize] = useState(1);
    const addNum = function(){
        props.onClick(size);
    }
    const onChangeSize = function(e) {
        setSize(Number(e.target.value));
    }


    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={addNum}></input>
            <input type="text" defaultValue={size} onChange={onChangeSize}></input>
        </div>
    )
}

export default AddNumber