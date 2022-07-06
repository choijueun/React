import React from 'react'

function ES6String() {
    const jsStr1 = '자바스크립트';
    const jsStr2 = '입니다.\n다음줄입니다';
    console.log(jsStr1+' 문자열'+jsStr2+'~')

    const esStr1 = 'ES6';
    const esStr2 = '입니다';
    console.log(`${esStr1} 문자열
    ${esStr2}~~~~`);

    const longStr = 'ES6에 추가된 String 함수들';
    console.log(longStr.startsWith('ES6'))
    console.log(longStr.endsWith('함수들'))
    console.log(longStr.includes('String'))

    return (
    <>
        <h2>R009 - ES6</h2>
    </>
    )
}

export default ES6String