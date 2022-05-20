import React, { Component } from 'react';
import './App.css';

import Header from './components/views/Header/Header'
import Nav from './components/views/Nav/Nav'
import Content from './components/views/Content/Content'

class App extends Component {
    // 컴포넌트가 실행될 때 constructor가 가장 먼저 실행되어 초기화를 담당
    constructor(props) {
        super(props);
        this.state = {
            subject: {title:'WEB', content: 'World Wide Web!'}
        }
    }
    render () {
        return (
            <div className="App">
                <Header title="React Programming"/>
                <Nav/>
                <Content title={this.state.subject.title} content={this.state.subject.content} />
            </div>
        );
    }
}

export default App;
