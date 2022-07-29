import React, { useState } from 'react'
import { Button, Fade } from 'reactstrap'
import Cat from '../../Cat'

function ReactstrapFade() {
    const [ isShow, setIsShow ] = useState(false)
    const toggle = e=>{
        setIsShow(!isShow)
    }

    return (
    <div>
        <Button color='success' onClick={toggle}>
            Fade In/Out
        </Button>
        <Fade in={isShow}>
            <Cat/>
        </Fade>
    </div>
    )
}

export default ReactstrapFade