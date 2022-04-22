import './App.css';
import logo from './logo.svg'

function App() {
    let posts = '양재동 맛집';
    function Fn() {
        return 100;
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>
            <h4>{ posts }</h4>
            <h3>{ Fn() }</h3>
            <img src={logo}/>
        </div>
    );
}

export default App;
