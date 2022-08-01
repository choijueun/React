import React, { useState } from 'react'
import { Button, Progress } from 'reactstrap';

function ReactstrapProgress() {
    let p = 0
    const [progress, setProgress] = useState(p)

    const ongoing = ()=>{
        if(p < 100) {
            setTimeout(() => {
                // console.log(`${progress} => ${progress+1}`)
                p = p + 1
                setProgress(p)
                ongoing()
            }, 100);
        }
    }

    return (
    <div>
        <h2>reactstrap: Progress</h2>
        <Button onClick={ongoing} color='light'>START</Button>
        <br/>
        <br/>
        <Progress striped color='info' value={progress}>Progress: {progress}%</Progress>
        <br/>
        <Progress multi>
            <Progress animated bar color='warning' value={25}>25%</Progress>
            <Progress animated bar color='success' value={35}>WoW</Progress>
            <Progress animated bar color='dark' value={15}>dark</Progress>
            <Progress animated bar color='danger' value={25}>LOOK OUT!!</Progress>
        </Progress>
    </div>
    )
}

export default ReactstrapProgress