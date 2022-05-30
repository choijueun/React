import './App.css';


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


function App() {
    return <>
        <Header/>
        <TOC/>
    </>
}

export default App;
