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
        console.log(_id);
    }

    let content = null;
    if (mode === 'MAIN') {
        content = <div>Hello, World.</div>
    }else if (mode === 'CONTENTS') {
        content = <Content id={id} topics={topics}></Content>
    }else if (mode === 'CREATE') {
        content = <Create onCreate={createTopic}></Create>
    }else if (mode === 'UPDATE') {
        content = <Update onUpdate={updateTopic}></Update>
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
                <li>
                    <button onClick={()=>{
                        setMode('UPDATE');
                    }}>UPDATE</button>
                </li>
            </ul>
        </>
    );
}

export default App;
