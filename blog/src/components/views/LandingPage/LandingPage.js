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
    const [id, setId] = useState(null);
    
    let content = null;
    if (mode === 'WELCOME') {
        content = <p>Hello, Web</p>
    }else if (mode === 'READ') {
        for(let i=0; i<topics.length; i++){
            if (topics[i]['id'] == id) {
                content = <>
                    <h1>{topics[i]['title']}</h1>
                    <p>Hello, Read</p>
                    <p>{topics[i]['body']}</p>
                </>
            }
        }
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
            <NavBar topics={topics} onChangeMode={(_id)=>{
                alert(id);
                setMode('READ');
                setId(_id);
            }}/>
            {content}
        </div>
    )
}

export default LandingPage