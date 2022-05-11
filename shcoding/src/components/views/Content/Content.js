import React from 'react'

function Content(props) {
    const topics = props.topics;

    let title = '';
    let content = '';
    for (let i=0; i<topics.length; i++){
        if (topics[i].id == props.id) {
            title = <h1>{topics[i].title}</h1>;
            content = <div>{topics[i].body}</div>
        }
    }

    return (
        <div>
            {title}
            {content}
        </div>
    )
}

export default Content