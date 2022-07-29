import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

function ReactstrapBreadcrumbs() {
    return <>
        <h2>reactstrap: Breadcrumbs</h2>
        <div id="top">
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem tag="a" href="#top">GO TO TOP</BreadcrumbItem>
                <BreadcrumbItem tag="a" href="#bottom">GO TO BOTTOM</BreadcrumbItem>
            </Breadcrumb>

            <div id="bottom" style={{marginTop:1000}}>
                bottom
            </div>
        </div>
    </>
}

export default ReactstrapBreadcrumbs