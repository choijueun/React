import './App.css';
import Header from './components/views/Header/Header'
import NavBar from './components/views/NavBar/NavBar'
import Content from './components/views/Content/Content'

import {useState} from 'react'

function App() {
    const topics = [
        {id:1, title:'HTML', body:'html is ...'}
        ,{id:2, title:'CSS', body:'css is ...'}
        ,{id:3, title:'JavaScript', body:'javascript is ...'}
    ]

    const [id, setId] = useState(null);

    return (
        <>
            <Header></Header>
            <NavBar topics={topics} onSetContent={}></NavBar>
            <Content></Content>
        </>
    );
}

export default App;
