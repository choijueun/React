import React, { Component } from 'react';
import './App.css';

import Header from './components/views/Header/Header'
import Nav from './components/views/Nav/Nav'
import Content from './components/views/Content/Content'

class App extends Component {
    render () {
        return (
            <div className="App">
                <Header title="React Programming"/>
                <Nav/>
                <Content title="Javascript" content="javascript is ..." />
            </div>
        );
    }
}

export default App;
