import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function TOC() {
    const navigate = useNavigate()
    const redirect_guest = function(event){
        event.preventDefault();
        console.log('navigate()')
        navigate('/guest', { replace: true });
    }

    return (
        <nav>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/blog">BLOG</NavLink></li>
                <li><NavLink to="/guest">GUEST</NavLink></li>
                <li><NavLink to="/go" onClick={redirect_guest}>REDIRECT</NavLink></li>
            </ul>
        </nav>
    )
}

export default TOC