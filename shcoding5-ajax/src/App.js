import './App.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="/">MAIN</a></li>
                <li><a href="/1">HTML</a></li>
                <li><a href="/2">CSS</a></li>
                <li><a href="/3">JS</a></li>
            </ul>
        </nav>
    )
}

function App() {
    return (
        <div className="App">
            <h1>WEB</h1>
            <Nav/>
            <article>

            </article>
        </div>
    );
}

export default App;
