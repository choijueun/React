import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    render() {
        const idx = this.props.id - 1;
        let title, desc = null;

        let btn = null;
        if(this.props.mode === 'MAIN') {

            btn = <div>
                <button>CREATE</button>
            </div>
        }else if(this.props.mode === 'READ'){
            title = this.props.contents[idx].title;
            desc = this.props.contents[idx].content;
            btn = <div>
                <button>CREATE</button>
                <button>UPDATE</button>
                <button>DELETE</button>
            </div>
        }


        return (
            <article>
                <h3>{title}</h3>
                {desc}
                {btn}
            </article>
        )
    }
}

export default Content