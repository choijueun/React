import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render(){
        let contents = this.props.data;
        let lis = [];
        for(let i=0; i<contents.length; i++){
            lis.push(<li>
                <a href={"/content/" + i }>{contents[i].title}</a>
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