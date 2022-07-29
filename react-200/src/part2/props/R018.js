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
    String: PropTypes.string.isRequired,
    Number: PropTypes.number,
    Boolean: PropTypes.bool,
    Array: PropTypes.array,
    Obj: PropTypes.shape({
        name: PropTypes.string,
        No: PropTypes.number
    }),
    Function: PropTypes.func
}
PropComponent.defaultProps = {
    Number: 50
}

function R018() {
  return (
      <>
        <h2>R018~R022 Props datatype</h2>
        <code>
            [R018] import PropTypes from 'prop-types' <br/>
            [R019] Boolean: default value = true<br/>
            [R020] 객체 내부 datatype: shape()<br/>
            [R021] 필수 값: .isRequired<br/>
            [R022] props key&val 모두 없을 때 default: defaultProps
        </code>
        <p><a href="https://ko.reactjs.org/docs/typechecking-with-proptypes.html" target="_blank">PropTypes</a></p>
        <PropComponent
            String="string props"
            // Number={200}
            Boolean
            Array={[1,2,3]}
            Obj={{'name': 'react', 'No': 18}}
            Function={ console.log('hi') } 
        />
      </>
  )
}




export default R018