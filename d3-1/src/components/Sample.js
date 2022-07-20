import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

function Sample() {
    const [data, setData] = useState([24, 30, 45, 70, 26]);
    const svgRef = useRef(null);
  
    useEffect(() => {
        console.log(svgRef.current)
        const svg = select(svgRef.current); // selection 객체

        svg.selectAll("circle")    // circle tag 전부 찾기
            .data(data)             // data binding
            // create update delete 관리
            .join(      // .join('circle) //간단
                (enter) => enter.append("circle"),           // circle 없다면 생성
                (update) => update.attr("class", "updated"), // circle 있다면 업데이트(updated class 추가)
                (exit) => exit.remove()                      // 남는 circle 지우기 (?)
            )
            // [속성] 
            .attr("r", (value) => value)        // r    반지름 
            .attr("cx", (value) => value * 2)   // cx   중심점 x좌표 
            .attr("cy", (value) => value * 2)   // cy   중심점 y좌표
            .attr("stroke", "blue");
    }, [data]);

    return (
    <>
        <h1>Sample.js</h1>
        <div>
            <a href="https://velog.io/@bangina/D3.js-React.js-Hooks-함께-사용하기-1" target={"_blank"}>
                <button>D3.js + React.js (Hooks) 함께 사용하기 -1</button>
            </a>
        </div>

        <svg ref={svgRef}></svg>
        
        <div>
            <button onClick={() => {setData(data.map(value => value + 5))}}>increase + 5</button>
            <button onClick={() => {setData(data.filter(value => value > 35))}}>filter circle r should gt 35</button>
        </div>
    </>
    );
}

export default Sample