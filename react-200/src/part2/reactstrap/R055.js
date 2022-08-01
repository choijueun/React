import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

function ReactstrapTab() {
    const [ tabnum, setTabnum ] = useState(0)
    
  return (
    <div>
        <h2>reactstrap: Tab</h2>

        <Nav tabs>
            <NavItem>
                <NavLink onClick={ ()=>{setTabnum(0)} }>First</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={ ()=>{setTabnum(1)} }>Second</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={ ()=>{setTabnum(2)} }>Third</NavLink>
            </NavItem>
        </Nav>

        <TabContent activeTab={tabnum}>
            <TabPane tabId={0}>
                <h3>혜정씨!</h3>
                <p>이렇게 말을 전해요...</p>
            </TabPane>
            <TabPane tabId={1}>
                <p>이험난하고척박한세상에서</p>
                <p>의지할사람하나없이사는게얼마나힘든지..</p>
                <h2>그러니</h2>
            </TabPane>
            <TabPane tabId={2}>
                <p>청년당당 당첨자 다 줘패고 저희집 얻어내주세요</p>
            </TabPane>
        </TabContent>
    </div>
  )
}

export default ReactstrapTab