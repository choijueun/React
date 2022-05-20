import React, { Component } from 'react'

class Content extends Component {
    render() {
        return (
            <>
            <h3>{this.props.title}</h3>
            {this.props.content}
            </>
        )
    }
}

export default Content