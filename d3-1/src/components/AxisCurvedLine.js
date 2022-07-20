import React, { useRef, useEffect, useState } from 'react'
import { 
    select, 
    line, curveCardinal,
    axisBottom, axisLeft, scaleLinear 
} from "d3";

function AxisCurvedLine() {
    // svc
    const svgRef = useRef();
    // data
    const [ data, setData ] = useState([5, 15, 5, 15, 5, 15, 5, 15, 5, 15, 5])

    useEffect(()=>{
        const svg = select(svgRef.current)

        // scale definition
        const xScale 
            = scaleLinear()
                .domain([0, data.length - 1])   // 축척...?
                .range([0, 500])                // x축 범위
        const yScale
            = scaleLinear()
                .domain([0, data.length - 1])
                .range([30, 0])

        
        


    }, [data])

    return <>
        <h1>AxisCurvedLine</h1>
        <div>
            <a href="https://velog.io/@bangina/D3.js-React.js-Hooks-함께-사용하기-3.-그래프-축-만들기" target={"_blank"}>
                <button>D3.js + React.js (Hooks) 함께 사용하기 -3</button>
            </a>
        </div>

        <svg ref={svgRef}></svg>
    </>
}

export default AxisCurvedLine