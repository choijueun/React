import React from 'react'

function Control(props) {
    let buttons = null;

    if(props.mode === 'MAIN') {
        buttons = <>
            <button>CREATE</button>
        </>
    }else if (props.mode === 'READ') {
        buttons = <>
            <button>CREATE</button>
            <button>UPDATE</button>
            <button>DELETE</button>
        </>
    }

    return (
        <div>
            { buttons }
        </div>
    )
}

export default Control