import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    render() {
        const contents = this.props.data;


        return (
            <article>
                <h3>{contents[0].title}</h3>
                {contents[0].content}
            </article>
        )
    }
}

export default Content