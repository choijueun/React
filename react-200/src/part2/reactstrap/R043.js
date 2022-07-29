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
        <h2>reactstrap: Fade</h2>
        <Button color='success' onClick={toggle}>
            Fade In/Out
        </Button>
        <Fade in={isShow} tag="p">
            {/* default tag: div */}
            <Cat/>
        </Fade>
    </div>
    )
}

export default ReactstrapFade