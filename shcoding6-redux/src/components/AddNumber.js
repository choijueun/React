import React from 'react';

function AddNumber(props) {
    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+" onClick={props.clickBtn}></input>
            <input type="text" defaultValue={props.size} onChange={props.onChangeSize}></input>
        </div>
    )
}

export default AddNumber