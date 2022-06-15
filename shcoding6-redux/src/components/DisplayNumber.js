import React from 'react'

function DisplayNumber(props) {
    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" defaultValue={props.num} readOnly></input>
        </div>
    )
}

export default DisplayNumber