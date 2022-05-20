import React, { Component } from 'react';
import './App.css';

import Header from './components/views/Header/Header'
import Nav from './components/views/Nav/Nav'

class App extends Component {
    render () {
        return (
            <div className="App">
                <Header title="React Programming"/>
                <Nav/>
            </div>
        );
    }
}

export default App;
