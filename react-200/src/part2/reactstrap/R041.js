import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

function ReactstrapCarousel() {
    const items = [
        {
            src: "https://cdn2.thecatapi.com/images/be0.jpg",
            altText: 'cat',
            caption: 'from thecatapi',
            header: 'header1'
        },
        {
            src: "https://cdn2.thecatapi.com/images/MllgAn89e.jpg",
            altText: 'cat',
            caption: 'from thecatapi',
            header: 'header2'
        },
        {
            src: "https://cdn2.thecatapi.com/images/zvrZDCaQG.jpg",
            altText: 'cat',
            caption: 'from thecatapi',
            header: 'header3'
        },
        {
            src: "https://cdn2.thecatapi.com/images/IoEXKWaOG.jpg",
            altText: 'cat',
            caption: 'from thecatapi',
            header: 'header4'
        },
    ]

  return (
    <div style={{width:600}}>
        <h2>reactstrap: Carousel</h2>
        <UncontrolledCarousel items={items} />
    </div>
  )
}

export default ReactstrapCarousel