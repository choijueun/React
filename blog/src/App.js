import React, { useState } from 'react';
import './App.css';

function App() {
    // let posts = '양재동 맛집';
    let [title, mdTitle] = useState('양재동 맛집');

    return (
        <div className="App">
            <div className="black-nav">
                <div style={ {color:'blue', fontSize: '30px'} }>개발 Blog</div>
            </div>
            <h4>{ posts }</h4>

            <div className="list">
                <h3>{ posts }</h3>
                <p>2022년 04월 22일</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
