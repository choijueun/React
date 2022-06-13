import React, { useEffect, useState } from 'react';
import './App.css';

function NowLoading() {
    return (
        <div>
            Now Loading ...
        </div>
    )
}

function Nav(props) {
    // onClick
    const changePage = function(e){
        e.preventDefault();
        console.log('trigger');
        props.onClick(e.target.dataset.id);
    }

    // li 태그 배열
    const liTag = [];
    for(let i=0; i<props.listObj.length; i++) {
        let li = props.listObj[i]
        liTag.push(
        <li key={li.id}>
            <a href={li.id} data-id={li.id} onClick={changePage}>
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
    // set list object state
    const [listObj, setListObj] = useState([]);
    // set article contents state
    const [content, setContent] = useState({'title': 'HELLO', 'desc': 'WORLD'});
    // set Loading state
    const [isListLoading, setIsListLoading] = useState(true);
    const [isContentLoading, setIsContentLoading] = useState(false);

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
                setIsListLoading(false);
            })
    }, [])

    const changeContent = function(id) {
        // now Loading
        setIsContentLoading(true);
        // fetchAPI
        fetch('content_'+id+'.json')
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                console.log('content: ',result);
                setContent(result);
                setIsContentLoading(false);
            })
    }

    // 로딩&완료 Nav
    let NavTag = null;
    if(isListLoading) {
        NavTag = <NowLoading/>;
    }else {
        NavTag = <Nav listObj={listObj} onClick={changeContent}/>;
    }
    // 로딩&완료 Article
    let ArticleTag = null;
    if(isContentLoading) {
        ArticleTag = <NowLoading/>;
    }else {
        ArticleTag = <Article title={content.title} desc={content.desc}/>;
    }
    

    return (
        <div className="App">
            <h1>WEB</h1>
            {/* 보여주는 기능만 담당하는 presentational component */}
            {NavTag}
            {ArticleTag}
        </div>
    );
}

export default App;
