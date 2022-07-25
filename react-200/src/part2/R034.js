import React from 'react'
import { Alert, UncontrolledAlert } from 'reactstrap'

function Reactstrap() {
    return <React.Fragment>
        <h2>reactstrap</h2>
        <Alert color='primary'>
            Simple Alert [color : primary]
        </Alert>
        <UncontrolledAlert color='dark'>
            Uncontrolled Alert [color : dark]
        </UncontrolledAlert>
        <p>color attribute</p>
        <code>
            primary <br/>
            secondary <br/>
            success <br/>
            danger <br/>
            warning <br/>
            info <br/>
            light <br/>
            dark 
        </code>
    </React.Fragment>
}

export default Reactstrap