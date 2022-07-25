import React from 'react'

function PropsNode(props){

    return <div>
        {props.children}
    </div>
}

function R023() {
  return <>
    <h2>R023</h2>
    <PropsNode>
        <code>props.children</code>
    </PropsNode>
    </>
}

export default R023