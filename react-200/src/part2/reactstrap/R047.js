import React from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'

function ReactstrapListGroup() {
  return (
    <div>
        <h2>reactstrap: ListGroup</h2>
        <ListGroup>
            <ListGroupItem color='light'>
                light <Badge pill color='info'>new</Badge>
            </ListGroupItem>
            <ListGroupItem color='success' tag='a' href="#success">
                success {'<a>'}
            </ListGroupItem>
            <ListGroupItem color='warning' tag='a' href="#warning" disabled>
                warning {'<a>'} disabled
            </ListGroupItem>
            <ListGroupItem color='danger' tag='button' onClick={()=>{console.log('danger!')}}>
                danger button
            </ListGroupItem>
            <ListGroupItem color='primary' tag='button' action onClick={()=>{console.log('primary!')}}>
                primary button action
            </ListGroupItem>
        </ListGroup>
    </div>
  )
}

export default ReactstrapListGroup