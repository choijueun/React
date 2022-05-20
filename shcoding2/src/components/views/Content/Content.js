import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    render() {
        const title = this.props.title;
        const desc = this.props.desc;


        return (
            <article>
                <h3>{title}</h3>
                {desc}
            </article>
        )
    }
}

export default Content