import React, { useState } from 'react'
import $ from 'jquery'
import { Badge, Button, ButtonGroup } from 'reactstrap'

function ReactstrapButtonGroup() {
    const [num, setNum] = useState(0)
    const updownNum = e=>{
        let n = $(e.target).text()
        setNum(num + Number(n))
    }

    return <div style={{padding:10}}>
        <h2>reactstrap: ButtonGroup</h2>
        <ButtonGroup>
            <Button outline onClick={updownNum}>-1</Button>
            <Button outline onClick={updownNum}>0</Button>
            <Button outline onClick={updownNum}>+1</Button>
        </ButtonGroup>
        <p>
            num : <Badge color='info'>{num}</Badge>
        </p>
    </div>
}

export default ReactstrapButtonGroup