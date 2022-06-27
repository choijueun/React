import React from 'react';
import './App.css';
import DisplayNumber from './components/DisplayNumber';
import AddNumber from './containers/AddNumber';


function App() {
    return (
        <div className="App">
            <AddNumber/>
            <DisplayNumber/>
        </div>
    );
}

export default App;
