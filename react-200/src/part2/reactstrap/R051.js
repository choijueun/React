import React from 'react'
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap'

function ReactstrapPopovers() {
  return (
    <div>
        <h2>reactstrap: Popovers</h2>
        <Button id="popover_button">Popover Button</Button>
        <UncontrolledPopover placement='right' target="popover_button">
            <PopoverHeader>
                React 200
            </PopoverHeader>
            <PopoverBody>
                It's 51st React Example.
            </PopoverBody>
        </UncontrolledPopover>
    </div>
  )
}

export default ReactstrapPopovers