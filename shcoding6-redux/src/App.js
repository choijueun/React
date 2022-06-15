import './App.css';

function AddNumber() {
    return (
        <div>
            <h1>Add Number</h1>
            <input type="button" value="+"></input>
            <input type="text" defaultValue="0"></input>
        </div>
    )
}

function AddNumberRoot() {
    return (
        <div>
            <h1>Add Number Root</h1>
            <AddNumber/>
        </div>
    )
}

function DisplayNumber() {
    return (
        <div>
            <h1>Display Number</h1>
            <input type="text" defaultValue="0" readOnly></input>
        </div>
    )
}

function DisplayNumberRoot() {
    return (
        <div>
            <h1>Display Number Root</h1>
            <DisplayNumber/>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <AddNumberRoot/>
            <DisplayNumberRoot/>
        </div>
    );
}

export default App;
