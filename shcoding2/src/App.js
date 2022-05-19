import React, { Component } from 'react';
import './App.css';

import Header from './Component/views/Header/Header'
import Nav from './Component/views/Nav/Nav'

class App extends Component {
    render () {
        return (
            <div className="App">
                <Header/>
                <Nav/>
            </div>
        );
    }
}

export default App;
