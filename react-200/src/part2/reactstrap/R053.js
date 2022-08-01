import React from 'react'
import { Spinner } from 'reactstrap'

function ReactstrapSpinner() {
  return (
    <div>
        <h2>reactstrap: Spinner</h2>
        <Spinner color='primary' />
        <Spinner color='secondary' type='grow'/>
        <Spinner color='warning' size='sm'/>
        <Spinner color='danger' style={{width: '10rem', height: '0.5rem'}}/>
        <Spinner color='success' style={{width: '10rem', height: '10rem'}}/>
        <Spinner color='info' type='grow' style={{width: '3rem', height: '10rem'}}/>
    </div>
  )
}

export default ReactstrapSpinner