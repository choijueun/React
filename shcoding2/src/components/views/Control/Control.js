import React from 'react'

function Control(props) {
    let buttons = null;
    let chMode = props.changeHelper.chMode;
    let chCont = props.changeHelper.chCont;
    let delCont = props.changeHelper.delCont;

    if(props.mode === 'MAIN') {
        buttons = <>
            <button onClick={()=>{
                chMode('CREATE');
            }}>CREATE</button>
        </>
    }else if (props.mode === 'READ') {
        buttons = <>
            <button onClick={()=>{
                chMode('CREATE');
            }}>CREATE</button>
            <button onClick={()=>{
                chMode('UPDATE');
            }}>UPDATE</button>
            <button onClick={()=>{
                delCont();
                chMode('MAIN');
            }}>DELETE</button>
        </>
    }

    return (
        <div>
            { buttons }
        </div>
    )
}

export default Control