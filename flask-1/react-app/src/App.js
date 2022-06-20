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

    return (
        <div className="App">
            <div>
                <input type="button" value="ADD 1" onClick={getStore}></input>
                <p>{num}</p>
            </div>
            <div>
                <input type="button" value="AXIOS"></input>
            </div>
        </div>
    );
}

export default App;
