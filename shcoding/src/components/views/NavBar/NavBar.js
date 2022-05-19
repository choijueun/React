import React from 'react'

function NavBar(props) {
    const topics = props.topics;
    const lis = [];
    for(let i=0; i<topics.length; i++){
        let tmp = topics[i]
        lis.push(<li key={tmp.id}>
                <a id={tmp.id} href="/" onClick={event=>{
                    event.preventDefault();
                    //alert(event.target.id);
                    props.onChangeMode(event.target.id);
                }}>{tmp.title}</a>
            </li>)
    }

  return (
    <ol>
        {lis}
    </ol>
  )
}

export default NavBar