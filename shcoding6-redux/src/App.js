import React from 'react';
import './App.css';
import DisplayNumber from './containers/DisplayNumber';
import AddNumber from './containers/AddNumber';


function App() {
    return (
        <div className="App">
            <AddNumber/>
            <DisplayNumber unit="kg"/>
        </div>
    );
}

export default App;
