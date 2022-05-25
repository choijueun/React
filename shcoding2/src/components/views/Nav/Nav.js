import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    shouldComponentUpdate(newProps, newState) {
        if(this.props.data === newProps.data) {
            return false;
        }
        return true
    }

    render(){
        console.log('TOC RENDER')
        const contents = this.props.data;
        let lis = [];
        for(let i=0; i<contents.length; i++){
            lis.push(<li key={ contents[i].id }>
                <a href={"/content/" + contents[i].id } onClick={(e)=>{
                    e.preventDefault();
                    this.props.changeHelper.chMode('READ');
                    this.props.changeHelper.chCont(contents[i].id);
                }}>{contents[i].title}</a>
            </li>)
        }

        return (
            <nav>
                <ul>
                    {lis}
                </ul>
            </nav>
        )
    }
}

export default Nav