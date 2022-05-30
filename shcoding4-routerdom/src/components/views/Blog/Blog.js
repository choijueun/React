import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'


function Topic() {
    return (
        <div>Topic</div>
    )
}

function Blog() {
  return <>
        <h2>Blog</h2>
        <ul>
            <li><NavLink to="/blog/1">blog1</NavLink></li>
            <li><NavLink to="/blog/2">blog2</NavLink></li>
        </ul>

        <Routes>
            <Route path='/blog/:blog_id' element={<Topic/>}></Route>
        </Routes>
    </>
}

export default Blog