import React, { Component, memo, PureComponent, useState } from 'react'


class PureClass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            stateString : 'react',
            stateArray : ['react', {react: 200}]
        }
    }

    btnClick = (type)=>{
        if(type === 'string') {
            console.log('PureComponent에서 string: 변수값 비교')
            this.setState( {stateString : 'react'} )
        }else {
            console.log('PureComponent에서 object: 참조값 비교 ')
            this.setState( {stateArray : ['react', {react: 200}]} )
        }
    }

    render() {
        console.log('class: render() 실행')

        return <div>
            <button onClick={(e)=>{this.btnClick('string')}}>
                문자열 변경
            </button>
            <button onClick={(e)=>{this.btnClick('array')}}>
                객체 배열 변경
            </button>
        </div>
    }
}

function PureFunction(props) {
    const [stateString, setStateString] = useState('react')
    const [stateArray, setStateArray] = useState( ['react', {react: 200}] )

    const btnClick = (type)=>{
        if(type === 'string') {
            console.log('string')
            setStateString('react')
        }else {
            console.log('array')
            setStateArray( ['react', {react: 200}] )
        }
    }
    console.log('functional: render')

    return <div>
        <button onClick={(e)=>{btnClick('string')}}>
            문자열 변경
        </button>
        <button onClick={(e)=>{btnClick('array')}}>
            객체 배열 변경
        </button>
    </div>
}

function R028() {
    return <>
        <h2>R028</h2>
        <h4>Class Component</h4>
        <PureClass />
        <h4>Functional Component</h4>
        <PureFunction />
    </>
}

export default R028