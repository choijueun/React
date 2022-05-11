import React from 'react'

function NavBar(props) {
    const topics = props.topics;
    const lis = [];
    for(let i=0; i<topics.length; i++){
        lis.push(<li key={topics[i].id}>{topics[i]['title']}</li>)
    }

  return (
    <ol>
        {lis}
    </ol>
  )
}

export default NavBar