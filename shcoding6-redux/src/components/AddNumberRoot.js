import React, { useState } from 'react';
import AddNumber from './AddNumber'

function AddNumberRoot(props) {
    const [size, setSize] = useState(1);
    const onChangeSize = function(n){
        console.log('change size: ',Number(n));
        setSize(Number(n));
    }
    const onChangeNum = function(){
        props.onChangeNum(props.num + size)
    }
    
    return (
        <div>
            <h1>Add Number Root</h1>
            <AddNumber onChangeSize={onChangeSize} onChangeNum={onChangeNum} size={size}/>
        </div>
    )
}

export default AddNumberRoot