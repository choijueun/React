import React, { Component } from 'react'

class Content extends Component {
    render() {
        const contents = this.props.data;


        return (
            <>
            <h3>{contents[0].title}</h3>
            {contents[0].content}
            </>
        )
    }
}

export default Content