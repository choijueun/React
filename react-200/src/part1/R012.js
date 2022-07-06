import React, { useEffect, useState } from 'react'

function ClassPrototype() {
    const [num, setNum] = useState(0);
    
    useEffect(()=>{

        /* ES5 Prototype */
        var exFn = (function(){
            function exCount(number) {
                setNum(number);
            }
            exCount.prototype.showNum = function(){
                console.log('1. ES5 prototype: ',num)
            }
            return exCount
        }())
        const cnt1 = new exFn(200);
        cnt1.showNum();


        /* ES6 Class */
        class exClass {
            constructor(number2) {
                setNum(number2);
            }
            showNum() {
                console.log(`2. ES6 Class: ${num}`);
            }
        }
        const cnt2 = new exClass(400);
        cnt2.showNum();
    })


    return (
    <div>ClassPrototype</div>
    )
}

export default ClassPrototype