import React from 'react'
import './App.css';

function FuncComp(props) {
    return (
        <div className="container">
            <h2>Function Style Component</h2>
            <p>props.intNumber: {props.intNumber}</p>
        </div>
    );
}


class ClassComp extends React.Component {
    state = {
        number : this.props.intNumber
    }
    render() {
        return (
            <div className="container">
                <h2>Class Style Component</h2>
                <p>props.intNumber: {this.state.number}</p>
            </div>
        );
    }
}


function App() {
    return (
    <div className="container">
        <h1>Hello World</h1>
        <FuncComp intNumber={2}/>
        <ClassComp intNumber={2}/>
    </div>
    );
}

export default App;
