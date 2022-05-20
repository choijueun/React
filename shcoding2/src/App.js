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
            subject: "React Programming",
            contents: [
                {title:'WEB', content: 'World Wide Web!'},
                {title:'HTML', content: 'HTML is ...'},
                {title:'CSS', content: 'CSS is ...'},
                {title:'JavaScript', content: 'JavaScript is ...'}
            ]
        }
    }
    render () {
        return (
            <div className="App">
                <Header title={this.state.subject}/>
                <Nav data={this.state.contents}/>
                <Content title={this.state.contents[0].title} content={this.state.contents[0].content} />
            </div>
        );
    }
}

export default App;
