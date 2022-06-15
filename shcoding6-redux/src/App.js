import React, { useState } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';


function App() {
    const [num, setNum] = useState(0);
    const onChangeNum = function(n) {
        setNum(n);
    }
    console.log('App.js ',num)

    return (
        <div className="App">
            <AddNumberRoot num={num} onChangeNum={onChangeNum}/>
            <DisplayNumberRoot num={num}/>
        </div>
    );
}

export default App;
