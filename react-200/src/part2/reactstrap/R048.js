import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function ReactstrapModal() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{setIsOpen(!isOpen)}


    return (
    <div>
        <h2>reactstrap: Modal</h2>
        
        <Button color='warning' onClick={toggle}>MODAL버튼</Button>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                HEADER
            </ModalHeader>
            <ModalBody>
                BODY ...
            </ModalBody>
            <ModalFooter>
                <Button color='danger' onClick={toggle}>CANCEL</Button>
                <Button color='primary' onClick={toggle}>SUBMIT</Button>
            </ModalFooter>
        </Modal>
    </div>
    )
}

export default ReactstrapModal