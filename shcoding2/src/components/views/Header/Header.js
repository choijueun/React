import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h3>생활코딩!</h3>
                <h1><a href="/" onClick={(e)=>{
                    e.preventDefault();
                    this.props.onChange.chMode('MAIN');
                }}>{this.props.title}</a></h1>
            </header>
        )
    }
}

export default Header