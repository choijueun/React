import { useState } from 'react';
import './App.css';
import CDUclass from './CDUclass';
import CDUfunction from './CDUfunction';

function App() {
    const [number, setNumber] = useState(0);
    function changeNumber(e) {
        setNumber(e.target.value);
    }
    function printNumber(){
        console.log(number);
    }

    const [age, setAge] = useState(null);
    let content = null;
    if(!age) {
        content = <>
            <CDUfunction age={age} onChangeAge={setAge}/>
            <CDUclass age={age} onChangeAge={setAge}/>
        </>
    }

    
    return (
        <div className="App">
            <h1>REACT 200</h1>
            <div>
                <input type="text" value={number} onChange={changeNumber}></input>
                <input type="button" value="PRINT" onClick={printNumber}></input>
            </div>
            <hr></hr>
            {content}
        </div>
    );
}

export default App;
