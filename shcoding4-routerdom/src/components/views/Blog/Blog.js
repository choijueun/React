import React from 'react'
import {NavLink, useParams} from 'react-router-dom'


function Topic(props) {
    return (
        <div>TOPIC ID: {props.id}</div>
    )
}

function Blog() {
    var params = useParams()
    console.log(params)

    var topic_id = params.topic_id

    return <>
        <h2>Blog</h2>
        <ul>
            <li><NavLink to="/blog/1">blog1</NavLink></li>
            <li><NavLink to="/blog/2">blog2</NavLink></li>
        </ul>

        <Topic id={topic_id}/>

    </>
}

export default Blog