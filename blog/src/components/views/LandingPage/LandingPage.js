import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

import NavBar from '../NavBar/NavBar'

function LandingPage(props) {
    const topics = [
        {id: 1, title: 'html', body: 'html is ...'}
        , {id: 2, title: 'css', body: 'css is ...'}
        , {id: 3, title: 'javascript', body: 'javascript is ...'}
    ]
    
    const [mode, setMode] = useState('WELCOME');
    
    let content = null;
    if (mode === 'WELCOME') {
        content = <p>Hello, Web</p>
    }else if (mode === 'READ') {
        content = <p>Hello, Read</p>
    }

    // Hook
    // useEffect(()=>{
    //     axios.get('/api/hello')
    //     .then(response => console.log(response.data))
    // }, [])

    return (
        <div>
            <h1><a href="/" onClick={function(event){
                event.preventDefault(); //기본동작 방지: reload X
                props.onChangeMode();
                setMode('WELCOME');
            }}>{props.title}</a></h1>
            <NavBar topics={topics} onChangeMode={(id)=>{
                alert(id);
                setMode('READ');
            }}/>
            {content}
        </div>
    )
}

export default LandingPage