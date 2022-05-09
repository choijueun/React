import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage(props) {
    // Hook
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return (
        <div>
            <h1>{props.title}</h1>
            LandingPage
        </div>
    )
}

export default LandingPage