import React from 'react'
import {NavLink} from 'react-router-dom'

function TOC() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/blog">BLOG</NavLink></li>
                <li><NavLink to="/guest">GUEST</NavLink></li>
            </ul>
        </nav>
    )
}

export default TOC