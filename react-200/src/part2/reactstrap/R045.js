import React from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'

function ReactstrapInputGroup() {
    return (
    <div>
        <h2>reactstrap: InputGroup</h2>
        <InputGroup>
            <Input type='text' id="id" placeholder='USER ID'/>
            <InputGroupText>@ foryousystems.com</InputGroupText>
        </InputGroup>
        <InputGroup>
            <InputGroupText>^^</InputGroupText>
            <Input type='text' id="id" placeholder='<-- DropwDown Button도 넣을 수 있다'/>
        </InputGroup>
        <InputGroup>
            <Input type="number" defaultValue={0} />
            <InputGroupText>₩</InputGroupText>
        </InputGroup>
        <InputGroup>
            <InputGroupText><Input type="checkbox" /></InputGroupText>
            <Input type='text' placeholder='etc.'/>
            <InputGroupText><Input type="checkbox" /></InputGroupText>
            <Input type='text' placeholder='etc.'/>
            <InputGroupText><Input type="checkbox" /></InputGroupText>
            <Input type='text' placeholder='etc.'/>
        </InputGroup>
    </div>
    )
}

export default ReactstrapInputGroup