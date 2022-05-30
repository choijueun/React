import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'


function Header() {
    return (
        <h1>React Router DOM</h1>
    )
}

function TOC() {
    return (
        <nav>
            <ul>
                <li>HOME</li>
                <li>BLOG</li>
                <li>GUEST</li>
            </ul>
        </nav>
    )
}

function Main() {
    return (
        <div>
            <p>MAIN</p>
        </div>
    )
}

function Blog() {
    return (
        <div>
            <p>BLOG</p>
        </div>
    )
}

function Guest() {
    return (
        <div>
            <p>GUEST</p>
        </div>
    )
}


function App() {
    return <>
        <Header/>
        <TOC/>
        <Router>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/guest' element={<Guest/>}></Route>
            </Routes>
        </Router>
    </>
}

export default App;
