import React, { useEffect, useState } from 'react';
import './App.css';

function Nav(props) {
    // set list object state
    const [listObj, setListObj] = useState([])

    // useEffect의 두 번째 인수로 빈 함수
    // --> class 형식의 componentDidMount()처럼 한 번만 실행됨
    useEffect(()=>{
        //fetchAPI
        fetch('list.json')
            .then(function(result){
                // result = fetch된 파일의 내용
                return result.json();
            }).then(function(result){
                // result = 첫 번째 then 함수의 반환값
                console.log(result);
                setListObj(result);
            })
    }, [])

    // li 태그 배열
    const liTag = [];
    for(let i=0; i<listObj.length; i++) {
        let li = listObj[i]
        liTag.push(
        <li key={li.id}>
            <a href={li.id} data-id={li.id} onClick={e=>{
                e.preventDefault();
                console.log('trigger');
                props.onClick(e.target.dataset.id);
            }}>
                {li.title}
            </a>
        </li>
        )
    }
    
    return (
        <nav>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.desc}
        </article>
    )
}

function App() {
    const [content, setContent] = useState({'title': 'HELLO', 'desc': 'WORLD'});
    const changeContent = function(id) {
        fetch('content_'+id+'.json')
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                console.log('content: ',result);
                setContent(result);
            })
    }

    return (
        <div className="App">
            <h1>WEB</h1>
            <Nav onClick={changeContent}/>
            <Article title={content.title} desc={content.desc}/>
        </div>
    );
}

export default App;
