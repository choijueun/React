import './App.css';
import Header from './components/views/Header/Header'
import NavBar from './components/views/NavBar/NavBar'
import Content from './components/views/Content/Content'
import Create from './components/views/Create/Create'
import Update from './components/views/Update/Update'

import {useState} from 'react'

function App() {
    const [topics, setTopics] = useState([
        {id:1, title:'HTML', body:'html is ...'}
        ,{id:2, title:'CSS', body:'css is ...'}
        ,{id:3, title:'JavaScript', body:'javascript is ...'}
    ]);
    const [mode, setMode] = useState('MAIN');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    let createTopic = (_title, _body)=>{
        const tmp_topic = {id:nextId, title:_title, body:_body};
        let new_topics = [...topics];
        new_topics.push(tmp_topic);
        setTopics(new_topics);
        setNextId(nextId+1)
        // 작성한 글 펼치기
        setMode('CONTENTS')
        setId(nextId)
    }

    let updateTopic = (_id, _title, _body)=>{
        let new_topics = [...topics];
        for(let i=0; i<new_topics.length; i++){
            if(new_topics[i].id === Number(_id)){
                new_topics[i] = {id: _id, title: _title, body: _body};
            }
        }
        setTopics(new_topics)
        // 수정한 글 펼치기
        setMode('CONTENTS')
        setId(_id)
    }

    let content = null;
    let contenxtControl = null;
    if (mode === 'MAIN') {
        content = <div>Hello, World.</div>
    }else if (mode === 'CONTENTS') {
        content = <Content id={id} topics={topics}></Content>
        contenxtControl = <li><button onClick={()=>{setMode('UPDATE')}}>UPDATE</button></li>
    }else if (mode === 'CREATE') {
        content = <Create onCreate={createTopic}></Create>
    }else if (mode === 'UPDATE') {
        let topic_default = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === Number(id)){
                topic_default = topics[i];
            }
        }
        console.log(topic_default);
        content = <Update id={id} topic={topic_default} onUpdate={updateTopic}></Update>
    }

    return (
        <>
            <Header onChangeMode={()=>{
                setMode('MAIN');
            }}></Header>
            <NavBar topics={topics} onChangeMode={(_id)=>{
                setMode('CONTENTS');
                setId(_id);
            }}></NavBar>

            {content}

            <ul>
                <li>
                    <button onClick={()=>{
                        setMode('CREATE');
                    }}>CREATE</button>
                </li>
                {contenxtControl}
            </ul>
        </>
    );
}

export default App;
