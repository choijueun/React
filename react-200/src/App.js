import { useState } from 'react';
import './App.css';
import SpreadOperator from './part1/R011';

function App() {
    const [number, setNumber] = useState(0);
    function changeNumber(e) {
        setNumber(e.target.value);
    }
    function printNumber(){
        console.log(number);
    }
    
    return (
    <div className="App">
        <h1>REACT 200</h1>
        <div>
            <input type="text" value={number} onChange={changeNumber}></input>
            <input type="button" value="PRINT" onClick={printNumber}></input>
        </div>
        <hr></hr>
        <SpreadOperator/>
    </div>
    );
}

export default App;
