import React from 'react'
import { Badge, Button } from 'reactstrap'

function ReactstrapBadges() {
    return <div style={{margin: 10}}>
        <h2>reactstrap: badge</h2>
        <p>
            PRODUCT <Badge color='danger'>50%</Badge> 
        </p>
        <p>
            <Button color='info' outline>
                CART(outline) <Badge color='info'>3</Badge>
            </Button>
        </p>
        <p>
            <Badge href="/hi" color='warning' pill>Link & pill</Badge>
        </p>
    </div>
}

export default ReactstrapBadges