import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import CDUclass from './CDUclass';
import CDUfunction from './CDUfunction';

import ReactstrapDropdown from './part2/R037';

function App() {
    const [number, setNumber] = useState(0);
    function changeNumber(e) {
        setNumber(e.target.value);
    }
    function printNumber(){
        console.log(number);
    }

    const [age, setAge] = useState(null);
    let class_function_lifecycle = null;
    if(age) {
        class_function_lifecycle = <>
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
            {class_function_lifecycle}
            <ReactstrapDropdown />
        </div>
    );
}

export default App;
