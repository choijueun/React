import React, { useState } from 'react';
import './App.css';

function App() {
    // let posts = '양재동 맛집';
    let [title, mTitle] = useState( ['하데스타운', '레베카', '라흐마니노프'] );

    return (
        <div className="App">
            <div className="black-nav">
                <div style={ {color:'blue', fontSize: '30px'} }>개발 Blog</div>
            </div>

            <div className="list">
                <h3>{ title[0] }</h3>
                <p>2022년 02월 15일 <span onClick={ ()=>{} }>👍</span> 0</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ title[1] }</h3>
                <p>2022년 02월 26일</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ title[2] }</h3>
                <p>2022년 03월 01일</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
