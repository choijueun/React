import React from 'react'
import './App.css';

function FuncComp() {
    return (
        <div className="container">
            <h2>Function Style Component</h2>
        </div>
    );
}


class ClassComp extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Class Style Component</h2>
            </div>
        );
    }
}


function App() {
    return (
    <div className="container">
        <h1>Hello World</h1>
        <FuncComp/>
        <ClassComp/>
    </div>
    );
}

export default App;
