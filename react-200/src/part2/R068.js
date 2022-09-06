import React from 'react'

function MouseEvent() {
    const mouseEv = e=>{
        console.log(e.target.value)
    }

    return <>
        <button style={{width:'300px', height:'300px', backgroundColor:'aqua'}} onMouseMove={mouseEv} value="mouseMove">mouseMove</button>
        <button style={{width:'300px', height:'300px', backgroundColor:'aqua'}} onMouseOver={mouseEv} value="mouseOver">mouseOver</button>
        <button style={{width:'300px', height:'300px', backgroundColor:'aqua'}} onMouseOut={mouseEv} value="mouseOut">mouseOut</button>
    </>
}

export default MouseEvent