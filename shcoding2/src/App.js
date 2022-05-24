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
                {id: 1, title:'WEB', desc: 'World Wide Web!'},
                {id: 2, title:'HTML', desc: 'HTML is ...'},
                {id: 3, title:'CSS', desc: 'CSS is ...'},
                {id: 4, title:'JavaScript', desc: 'JavaScript is ...'}
            ]
        }
    }
    render () {
        let article = null;
        if (this.state.mode === 'MAIN') {
            article = this.state.main;
        } else if (this.state.mode === 'READ') {
            const idx = this.state.sel_content_id - 1;
            article = this.state.contents[idx];
        }

        const changeHelper = {
            chMode : function(_mode){
                this.setState({mode: _mode});
            }.bind(this),
            chCont : function(num) {
                this.setState({sel_content_id: num});
            }.bind(this),
            delCont : function() {
                let new_cont = [];
                for(let i=0; i<this.state.contents.length; i++) {
                    if(Number(this.state.contents[i].id) === this.state.sel_content_id) {
                        continue;
                    }
                    new_cont.push(this.state.contents[i]);
                }
                this.setState({contents: new_cont});
            }.bind(this)
        }

        return (
            <div className="App">
                <Header title={this.state.subject} changeHelper={changeHelper}/>
                <Nav data={this.state.contents} changeHelper={changeHelper}/>
                <Content id={this.state.sel_content_id} changeHelper={changeHelper} contents={article} mode={this.state.mode} />
            </div>
        );
    }
}

export default App;
