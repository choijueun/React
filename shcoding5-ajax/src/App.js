import React, { useState } from 'react';
import './App.css';

function Nav() {
    fetch('list.json')
        .then(function(result){
            // result = fetch된 파일의 내용
            return result.json();
        }).then(function(result){
            // result = 첫 번째 then 함수의 반환값
            console.log(result);
        })
    
    return (
        <nav>
            <ul>
                <li><a href="/">MAIN</a></li>
                <li><a href="/1">HTML</a></li>
                <li><a href="/2">CSS</a></li>
                <li><a href="/3">JS</a></li>
            </ul>
        </nav>
    )
}

function App() {
    return (
        <div className="App">
            <h1>WEB</h1>
            <Nav/>
            <article>

            </article>
        </div>
    );
}

export default App;
