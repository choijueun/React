import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

function ReactstrapCard() {
    return (
    <div style={{width: 500}}>
        <h2>reactstrap: Card</h2>
        <Card>
            <CardImg top src="https://cdn2.thecatapi.com/images/MTY1MjExMA.jpg" alt='cat raising up its arms'/>
            <CardBody>
                <CardTitle>TITLE</CardTitle>
                <CardSubtitle>subtitle</CardSubtitle>
                <CardText>card body - text</CardText>
                <CardSubtitle>subtitle</CardSubtitle>
                <CardText>card body - text</CardText>
                <Button color='primary' outline>btn</Button>
            </CardBody>
        </Card>
    </div>
    )
}

export default ReactstrapCard