import React, { Component } from 'react';
import './App.css';

import Header from './components/views/Header/Header'
import Nav from './components/views/Nav/Nav'
import ReadContent from './components/views/Contents/ReadContent'
import CreateContent from './components/views/Contents/CreateContent';

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
        const changeHelper = {
            chMode : function(_mode){
                this.setState({mode: _mode});
            }.bind(this),
            chCont : function(num) {
                this.setState({sel_content_id: num});
            }.bind(this),
            creCont : function(_title, _desc) {
                let new_cont = [...this.state.contents];
                let last_idx = this.state.contents.length - 1;
                let new_id = new_cont[last_idx].id + 1;
                new_cont.push({id: new_id, title: _title, desc: _desc});
                this.setState({contents: new_cont});
                changeHelper.chCont(new_id);
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

        let article = null;
        let content_section = null;
        if (this.state.mode === 'MAIN') {
            article = this.state.main;
            content_section = <ReadContent id={this.state.sel_content_id} changeHelper={changeHelper} contents={article} mode={this.state.mode} />
        }else if (this.state.mode === 'READ') {
            const idx = this.state.sel_content_id - 1;
            article = this.state.contents[idx];
            content_section = <ReadContent id={this.state.sel_content_id} changeHelper={changeHelper} contents={article} mode={this.state.mode} />
        }else if (this.state.mode === 'CREATE') {
            content_section = <CreateContent changeHelper={changeHelper}/>
        }

        return (
            <div className="App">
                <Header title={this.state.subject} changeHelper={changeHelper}/>
                <Nav data={this.state.contents} changeHelper={changeHelper}/>
                {content_section}
            </div>
        );
    }
}

export default App;
