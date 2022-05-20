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
            mode: 'MAIN',
            main: {title: 'WELCOME', desc:'Hello, React!'},
            contents: [
                {id: 1, title:'WEB', content: 'World Wide Web!'},
                {id: 2, title:'HTML', content: 'HTML is ...'},
                {id: 3, title:'CSS', content: 'CSS is ...'},
                {id: 4, title:'JavaScript', content: 'JavaScript is ...'}
            ]
        }
    }
    render () {
        let _title, _desc = null;
        if (this.state.mode === 'MAIN') {
            _title = this.state.main.title;
            _desc = this.state.main.desc;
        }

        return (
            <div className="App">
                <Header title={this.state.subject}/>
                <Nav data={this.state.contents}/>
                <Content data={this.state.contents} />
            </div>
        );
    }
}

export default App;
