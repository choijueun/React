import './App.css';
import Header from './components/views/Header/Header'
import NavBar from './components/views/NavBar/NavBar'
import Content from './components/views/Content/Content'

function App() {
    const topics = [
        {id:1, title:'HTML', body:'html is ...'}
        ,{id:2, title:'CSS', body:'css is ...'}
        ,{id:3, title:'JavaScript', body:'javascript is ...'}
    ]

    return (
        <>
            <Header></Header>
            <NavBar topics={topics}></NavBar>
            <Content></Content>
        </>
    );
}

export default App;
