import React from 'react'

function Header(props) {
    return (
        <h1 onClick={()=>{
            props.onChangeMode();
        }}>React - 생활코딩</h1>
    )
}

export default Header