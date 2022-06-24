import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
    const [members, setMembers] = useState([]);
    const lis = [];

    for (let i=0; i<members.length; i++) {
        lis.push(<li key={i}>{members[i]}</li>)
    }
    
    useEffect(()=>{
        fetch('/members').then(
            res => res.json()
        ).then(
            data => {
                setMembers(data.members);
            }
        )
    }, [])


    return (
        <div>
            <h1>TEST</h1>
            <ul>
                {lis}
            </ul>
        </div>
    );
}

export default App;
