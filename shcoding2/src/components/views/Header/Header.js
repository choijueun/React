import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h3>생활코딩!</h3>
<<<<<<< HEAD:shcoding2/src/Component/views/Header/Header.js
                <h1>{this.props.title}</h1>
=======
                <h1><a href="/" onClick={(e)=>{
                    e.preventDefault();
                    this.props.changeHelper.chMode('MAIN');
                }}>{this.props.title}</a></h1>
>>>>>>> b393893f585dcdc953f003e450f50752bdc8d4ba:shcoding2/src/components/views/Header/Header.js
            </header>
        )
    }
}

export default Header