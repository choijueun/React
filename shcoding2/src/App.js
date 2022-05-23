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
            sel_content_id: 1,
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
        } else if (this.state.mode === 'READ') {
            const idx = this.state.sel_content_id - 1;
            _title = this.state.contents[idx].title;
            _desc = this.state.contents[idx].content;
        }

        const changeHelper = {
            chMode : function(_mode){
                this.setState({mode: _mode});
            }.bind(this),
            chCont : function(num) {
                this.setState({sel_content_id: num});
            }.bind(this)
        }

        return (
            <div className="App">
                <Header title={this.state.subject} onChange={changeHelper}/>
                <Nav data={this.state.contents} onChange={changeHelper}/>
                <Content title={_title} desc={_desc} />
            </div>
        );
    }
}

export default App;
