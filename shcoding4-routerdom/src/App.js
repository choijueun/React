import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
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
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/guest">GUEST</Link></li>
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
        <Router>
            <TOC/>
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
