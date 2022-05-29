import React, {useState} from 'react'
import './App.css';

function FuncComp(props) {
    let [number, setNumber] = useState(props.intNumber);
    return (
        <div className="container">
            <h2>Function Style Component</h2>
            <p>props.intNumber: {number}</p>
            <input type='button' value="RANDOM" onClick={function(){
                    setNumber(Math.random());
                }}></input>
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
                <input type='button' value="RANDOM" onClick={function(){
                    this.setState({number: Math.random()});
                }.bind(this)}></input>
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
