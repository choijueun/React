import React from 'react'

function NavBar(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let tmp = props.topics[i];
        lis.push(<li>{tmp.title}</li>)
    }

    return (
        <div>
            NavBar
        </div>
    )
}

export default NavBar