import React, { useState } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';


function App() {
    const [num, setNum] = useState(0);

    return (
        <div className="App">
            <AddNumberRoot/>
            <DisplayNumberRoot num={num}/>
        </div>
    );
}

export default App;
