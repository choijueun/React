import axios from 'axios';
import { useState } from 'react';
import './App.css';
import store from './store';

function App() {
    const [num, setNum] = useState(0);
    store.subscribe(function(){
        setNum(store.getState().number);
    })
    
    const getStore = function(){
        store.dispatch({type: 'App', number: num+1})
    }

    const [res, setRes] = useState(null);

    function getAxios(){
        const url = '/test-endpoint';
        axios.get(url)
             .then((response)=>{
                 setRes(response.data);
             })
    }

    return (
        <div className="App">
            <div>
                <input type="button" value="ADD 1" onClick={getStore}></input>
                <p>{num}</p>
            </div>
            <div>
                <input type="button" value="AXIOS" onClick={getAxios}></input>
                <p>{res}</p>
            </div>
        </div>
    );
}

export default App;
