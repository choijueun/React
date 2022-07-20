import React, { useState } from 'react'
import './App.css';

import Sample from './components/Sample';
import CurvedLine from './components/CurvedLine';


function Nav(props){
    const nav     = ['Sample(Circle)', 'CurvedLine']
    const content = [<Sample/>, <CurvedLine/>]

    let li = []
    nav.forEach((n, i)=>{
        li = li.concat(<li key={i} id={i} onClick={changeTab}>{n}</li>)
    })
    function changeTab(e){
        const idx = e.target.id
        props.setBody(content[idx])
    }

    return <ul>
        {li}
    </ul>
}


function App() {
    const [ body, setBody ] = useState(<Sample/>)

    return <>
        <a href='https://youtu.be/Y-ThTzB-Zjk' target={"_blank"}>
            <button>► Using React (Hooks) with D3</button>
        </a>
        <Nav setBody={setBody}/>
        <hr/>
        {body}
    </>
}

export default App;
