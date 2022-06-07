import React from 'react'
import {Routes, Route, NavLink, useParams} from 'react-router-dom'


function Topic() {
    return (
        <div>Topic</div>
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

        <div>
            TOPIC ID: {topic_id}
        </div>

        {/* <Routes>
            <Route path='/blog/:blog_id' element={<Topic/>}></Route>
        </Routes> */}
    </>
}

export default Blog