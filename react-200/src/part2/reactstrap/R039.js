import React from 'react'
import { Button } from 'reactstrap'

function ReactstrapButtons() {
    return (<div>
        <h2>reactstrap: Button</h2>
        <div style={{padding:10}}>
            <Button color='primary'>primary</Button>
            <Button color='secondary'>secondary</Button>
            <Button color='success'>success</Button>
            <Button color='danger'>danger</Button>
            <Button color='warning'>warning</Button>
            <Button color='info'>info</Button>
            <Button color='light'>light</Button>
            <Button color='dark'>dark</Button>
        </div>
        <div style={{padding:10}}>
            <Button color='primary' outline>primary</Button>
            <Button color='secondary' outline>secondary</Button>
            <Button color='success' outline>success</Button>
            <Button color='danger' outline>danger</Button>
            <Button color='warning' outline>warning</Button>
            <Button color='info' outline>info</Button>
            <Button color='light' outline>light</Button>
            <Button color='dark' outline>dark</Button>
        </div>
    </div>)
}

export default ReactstrapButtons