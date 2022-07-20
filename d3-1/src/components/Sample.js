import React, { useRef, useEffect, useState } from "react";
import { select } from "d3";

function Sample() {
    const [data, setData] = useState([24, 30, 45, 70, 26]);
    const svgRef = useRef(null);
  
    useEffect(() => {
        console.log(svgRef.current)
        const svg = select(svgRef.current); // selection 객체

        svg
            // circle tag 전부 찾기
            .selectAll("circle")
            // data binding
            .data(data)
            // create update delete 관리
            // .join('circle) //간단
            .join(
                // circle 없다면 생성
                (enter) => enter.append("circle"),
                // circle 있다면 업데이트(updated class 추가)
                (update) => update.attr("class", "updated"),
                // 남는 circle 지우기 (?)
                (exit) => exit.remove()
            )
            // [속성] 
            // r    반지름 
            .attr("r", (value) => value)
            // cx   중심점 x좌표 
            .attr("cx", (value) => value * 2)
            // cy   중심점 y좌표
            .attr("cy", (value) => value * 2)
            .attr("stroke", "blue");
    }, [data]);

    return (
    <>
      <svg ref={svgRef}></svg>
      <button onClick={() => {setData(data.map(value => value + 5))}}>increase + 5</button>
      <button onClick={() => {setData(data.filter(value => value > 35))}}>filter circle r should gt 35</button>
    </>
    );
}

export default Sample