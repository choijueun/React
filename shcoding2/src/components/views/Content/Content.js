import React, { Component } from 'react'
import './Content.css'

class Content extends Component {
    render() {
        let title = this.props.contents.title;
        let desc = this.props.contents.desc;

        let btn = null;
        if(this.props.mode === 'MAIN') {
            btn = <div>
                <button>CREATE</button>
            </div>
        }else if(this.props.mode === 'READ'){
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