import React from 'react'

function NavBar(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let tmp = props.topics[i];
        lis.push(<li key={tmp.id}><a id={tmp.id} href={'/read/'+tmp.id} onClick={event=>{
            event.preventDefault();
            //props.onChangeMode(event.target.id);
        }}>{tmp.title}</a></li>)
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