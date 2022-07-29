import React from 'react'
import { Form, Row, Col, FormGroup, Input, Label } from 'reactstrap'

function ReactstrapForm() {
    return <div>
        <h2>reactstrap: Form</h2>
        <Form>
            <FormGroup>
                <Label for='gender'>성별</Label>
                <Input type='select' id='gender' name='gender'>
                    <option>no option</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
            </FormGroup>
            <Row form>
                <Col sm={6}>
                    <FormGroup>
                        <Label for='address'>주소</Label>
                        <Input type='text' id='address' name='address'></Input>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for='phone'>번호</Label>
                        <Input type='text' id='phone' name='phone'></Input>
                    </FormGroup>
                </Col>
                <Col sm={2}>
                    <FormGroup>
                        <Label for='age'>나이</Label>
                        <Input type='number' id='age' name='age'></Input>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Input type='radio' id='go_home_Y' name='go_home'/>
                <Label for='go_home_Y'>YES</Label>
                <Input type='radio' id='go_home_N' name='go_home'/>
                <Label for='go_home_N'>NO</Label>
            </FormGroup>
            <FormGroup>
                <Input type='checkbox' id='desert_choco' name='desert'/>
                <Label for='desert_choco'>choco</Label>
                <Input type='checkbox' id='desert_vanilla' name='desert'/>
                <Label for='desert_vanilla'>vanilla</Label>
            </FormGroup>
        </Form>
    </div>
}

export default ReactstrapForm