import React from 'react'
import PropTypes from 'prop-types'

function PropComponent(props){
    let { String, Number, Boolean, Array, Obj, Function } = props

    return <div>
        <p>String: {String}</p>
        <p>Number: {Number}</p>
        <p>Boolean: {Boolean.toString()} (Default: true)</p>
        <p>Array: {Array.toString()}</p>
        <p>Obj: {JSON.stringify(Obj)}</p>
        <p>Function: {Function}</p>
    </div>
}
PropComponent.propTypes = {
    String: PropTypes.string,
    Number: PropTypes.number,
    Boolean: PropTypes.bool,
    Array: PropTypes.array,
    Obj: PropTypes.shape({
        name: PropTypes.string,
        No: PropTypes.number
    }),
    Function: PropTypes.func
}

function R018() {
  return (
      <>
        <h2>R018 Props datatype</h2>
        <PropComponent
            String="string props"
            Number={200}
            Boolean
            Array={[1,2,3]}
            Obj={{'name': 'react', 'No': 18}}
            Function={ console.log('hi') } 
        />
      </>
  )
}




export default R018