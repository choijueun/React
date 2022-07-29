import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunction from './LifeCycleFunction';

import ReactstrapJumbotron from './part2/reactstrap/R046';

function App() {
    const [age, setAge] = useState(0);
    
    function changeNumber(e) {
        setAge(e.target.value);
    }
    function printNumber(){
        console.log(age);
    }

    return (
        <div className="App" style={{margin:15}}>
            <h1>REACT 200</h1>
            <div>
                <input type="text" value={age} onChange={changeNumber}></input>
                <input type="button" value="PRINT" onClick={printNumber}></input>
            </div>
            <hr></hr>
            <LifeCycleFunction age={age} onChangeAge={setAge}/>
            <hr/>
            <ReactstrapJumbotron />
        </div>
    );
}

export default App;
