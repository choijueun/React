import React from 'react'

function AddNumber(props) {
    const onChangeSize = function(e) {
        props.onChangeSize(e.target.value);
    }

    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={props.onChangeNum}></input>
            <input type="text" defaultValue={props.size} onChange={onChangeSize}></input>
        </div>
    )
}

export default AddNumber