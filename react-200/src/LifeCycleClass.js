import React, { Component } from 'react'

class LifeCycleClass extends Component {
    componentDidMount(){
        console.log('Class: componentDidMount()');
    }
    componentDidUpate(prevProps, prevState){
        if(this.props.age != prevProps.age){
            console.log('Class: componentDidUpdate()');
        }
    }
    componentWillUnmount(){
        console.log('Class: componentWillUnmount');
    }
    
    render(){
        const setAge = ()=>{
            this.props.onChangeAge(27);
        }
        return (
            <>
                <h2>C - age: {this.props.age}</h2>
                <input type="button" value="setAge" onClick={setAge}></input>
            </>
        )
    }
}

export default LifeCycleClass