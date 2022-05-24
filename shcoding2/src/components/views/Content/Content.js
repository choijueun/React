import React, { Component } from 'react'
import './Content.css'
import Control from '../Control/Control'

class Content extends Component {
    render() {
        let title = this.props.contents.title;
        let desc = this.props.contents.desc;
        
        return (
            <article>
                <h3>{title}</h3>
                {desc}
                <Control mode={this.props.mode}/>
            </article>
        )
    }
}

export default Content