import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";

function CurvedLine() {
    // svc
    const svgRef = useRef();
    // data
    const [ inData, setInData ] = useState([1, 10, 3, 22, 50, 43, 20, 31, 4])
    const [ outData, setOutData ] = useState(inData.map(val => val * -1))

    useEffect(()=>{
        const svg = select(svgRef.current)

        const getLine 
            = line()
                .x((x, i)=> i * 50)     // x 좌표
                .y((y, i)=> 70 - y)    // y 좌표
                .curve(curveCardinal)   // 곡선
        
        svg.selectAll('path')   // path tag 선택
            .data([inData,outData])     // data binding
            .join( // .join('path') 동일
                (enter) => enter.append('path'),
                (update) => update.attr('style', {'color': 'red'}),
                (exit) => exit.remove()
            )
            .attr('d', (value)=>getLine(value))
            .attr('fill', 'yellow')     // fill    채우기
            .attr('stroke', 'blue')   // storke  선 색상
    }, [inData])


    return <>
        <h1>CurvedLine</h1>
        <div>
            <a href="https://velog.io/@bangina/D3.js-React.js-Hooks-함께-사용하기-2.-곡선-그래프-만들기" target={"_blank"}>
                <button>D3.js + React.js (Hooks) 함께 사용하기 -2</button>
            </a>
        </div>

        <svg ref={svgRef}></svg>

    </>
}

export default CurvedLine