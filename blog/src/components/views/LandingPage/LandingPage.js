import React, { useEffect } from 'react'
import axios from 'axios'

import NavBar from '../NavBar/NavBar'

function LandingPage(props) {
    // Hook
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            <NavBar topics={topics}/>
        </div>
    )
}

export default LandingPage