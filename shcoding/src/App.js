import './App.css';
import Header from './components/views/Header/Header'
import NavBar from './components/views/NavBar/NavBar'
import Content from './components/views/Content/Content'
import Create from './components/views/Create/Create'

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
    }

    let content = null;
    if (mode === 'MAIN') {
        content = <div>Hello, World.</div>
    }else if (mode === 'CONTENTS') {
        content = <Content id={id} topics={topics}></Content>
    }else if (mode === 'CREATE') {
        content = <Create onCreate={createTopic}></Create>
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
            <button onClick={()=>{
                setMode('CREATE');
            }}>CREATE</button>
            {content}
        </>
    );
}

export default App;
