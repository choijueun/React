import React from 'react'

function Control(props) {
    let buttons = null;
    let changeMode = props.changeMode;

    if(props.mode === 'MAIN') {
        buttons = <>
            <button onClick={()=>{
                changeMode('CREATE');
            }}>CREATE</button>
        </>
    }else if (props.mode === 'READ') {
        buttons = <>
            <button onClick={()=>{
                changeMode('CREATE');
            }}>CREATE</button>
            <button onClick={()=>{
                changeMode('UPDATE');
            }}>UPDATE</button>
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