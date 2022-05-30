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
                <li><a href="/">HOME</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a href="/guest">GUEST</a></li>
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
                <Route path='*' element={<div>404 NOT FOUND</div>}></Route>
            </Routes>
        </Router>
    </>
}

export default App;
