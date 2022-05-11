import React from 'react'

function Header(props) {
    return (
        <h1>
            <a href="#" onClick={event=>{
                event.preventDefault();
                props.onChangeMode();
            }}>React - 생활코딩</a>
        </h1>
    )
}

export default Header