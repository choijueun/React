import React, { Component } from 'react'
import './ReadContent.css'
import Control from '../Control/Control'

class Content extends Component {
    render() {
        let title = this.props.contents.title;
        let desc = this.props.contents.desc;

        return (
            <article>
                <h3>{title}</h3>
                {desc}
                <Control mode={this.props.mode} changeHelper={this.props.changeHelper}/>
            </article>
        )
    }
}

export default Content