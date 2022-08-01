import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

function ReactstrapNavbar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const toggler = ()=>{ setIsCollapsed(!isCollapsed) }

    return (
    <div>
        <h2>reactstrap: Navbar</h2>
        <Navbar color='faded' light style={{width:600}}>
            <NavbarBrand href="/" className='mr-auto'>NavbarBrand</NavbarBrand>
            <NavbarToggler onClick={toggler} className='mr-2' />
            <Collapse isOpen={isCollapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#">#</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="http://www.naver.com" target='_blank'>naver</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
    )
}

export default ReactstrapNavbar