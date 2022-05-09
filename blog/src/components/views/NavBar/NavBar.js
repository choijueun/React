import React from 'react'

function NavBar(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let tmp = props.topics[i];
        lis.push(<li key={tmp.id}><a href={'/read/'+tmp.id}>{tmp.title}</a></li>)
    }

    return (
        <div>
            NavBar
            <ol>
                {lis}
            </ol>
        </div>
    )
}

export default NavBar