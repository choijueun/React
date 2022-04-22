import './App.css';

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
        </div>
    );
}

export default App;
