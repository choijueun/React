import React, { useState } from 'react'
import { Badge, Button, ButtonGroup } from 'reactstrap'

function ReactstrapButtonGroup() {
    const [num, setNum] = useState(0)
    const updownNum = (n)=>{
        setNum(num + n)
    }

    return <div style={{padding:10}}>
        <h2>ReactstrapButtonGroup</h2>
        <ButtonGroup>
            <Button outline onClick={e=> updownNum(-1)}>-1</Button>
            <Button outline onClick={e=> console.log(num)}>console</Button>
            <Button outline onClick={e=> updownNum(+1)}>+1</Button>
        </ButtonGroup>
        <p>
            num : <Badge color='info'>{num}</Badge>
        </p>
    </div>
}

export default ReactstrapButtonGroup