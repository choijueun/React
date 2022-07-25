import React, { useState } from 'react'
import { UncontrolledCollapse, Button, Card, CardBody } from 'reactstrap'

function ReactstrapCollapse() {
    const [isOpen, setIsOpen] = useState(false)
    const [ btnName, setBtnName ] = useState('펼치기')
    const toggle = ()=>{
        if(isOpen) {
            setBtnName('펼치기')
        }else {
            setBtnName('접기')
        }
        setIsOpen(!isOpen)
    }

    return (
    <div>
        <h2>ReactstrapCollapse</h2>
        <Button color="warning" id="toggleBtn" onClick={toggle}>{btnName}</Button>
        <UncontrolledCollapse toggler='#toggleBtn'>
            <Card style={{width:500}}>
                <CardBody>REACT 200제</CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
    )
}

export default ReactstrapCollapse