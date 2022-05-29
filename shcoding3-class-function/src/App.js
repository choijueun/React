import React, {useState, useEffect} from 'react'
import './App.css';

function FuncComp(props) {
    let funcStyle = 'color: blue';
    let funcId = 0;
    
    let [number, setNumber] = useState(props.intNumber);
    let [date, setDate] = useState((new Date()).toString());
    
    console.log('%cfunc => render'+(++funcId), funcStyle);

    // side effect
    useEffect(function(){
        console.log('%cfunc => useEffect'+(++funcId), funcStyle);
        document.title = number + ':' + date;
    }, [date])

    return (
        <div className="container">
            <h2>Function Style Component</h2>
            <p>number: {number}</p>
            <p>Date: {date}</p>
            <input type='button' value="RANDOM" onClick={function(){
                    setNumber(Math.random());
                }}></input>
            <input type='button' value="DATE" onClick={function(){
                    setDate((new Date()).toString());
                }}></input>
        </div>
    );
}


class ClassComp extends React.Component {
    state = {
        number : this.props.intNumber,
        date : (new Date()).toString()
    }
    render() {
        return (
            <div className="container">
                <h2>Class Style Component</h2>
                <p>number: {this.state.number}</p>
                <p>Date: {this.state.date}</p>
                <input type='button' value="RANDOM" onClick={function(){
                    this.setState({number: Math.random()});
                }.bind(this)}></input>
                <input type='button' value="DATE" onClick={function(){
                    this.setState({date : (new Date()).toString()});
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
