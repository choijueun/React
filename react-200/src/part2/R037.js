import React, { useState } from 'react'
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

function ReactstrapDropdown() {
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false)
    const toggle = (e)=>{ setIsDropdownOpen(!isDropdownOpen) }

    return (
    <div>
        <h2>ReactstrapDropdown</h2>
        <ButtonDropdown isOpen={isDropdownOpen} toggle={toggle}>
            <DropdownToggle caret>버튼 드롭다운</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>header</DropdownItem>
                <DropdownItem disabled>disabled</DropdownItem>
                <a href="https://www.naver.com/" target="_blank">
                    <DropdownItem>LINK</DropdownItem>
                </a>
                <DropdownItem onClick={e=>{alert('Alert Button')}}>ALERT</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    </div>
    )
}

export default ReactstrapDropdown