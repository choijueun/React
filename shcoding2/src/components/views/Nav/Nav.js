import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render(){

        const contents = this.props.data;
        let lis = [];
        for(let i=0; i<contents.length; i++){
            lis.push(<li key={ contents[i].id }>
                <a href={"/content/" + contents[i].id } onClick={(e)=>{
                    e.preventDefault();
                    this.props.onChangeCont.chMode('READ');
                    this.props.onChangeCont.chCont(contents[i].id);
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