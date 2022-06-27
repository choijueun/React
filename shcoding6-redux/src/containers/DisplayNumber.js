import React, {useState} from 'react';
import DisplayNumber from '../components/DisplayNumber';
import store from '../store';

export default function() {
    const [num, setNum] = useState(store.getState().num);
    store.subscribe(function(){
        setNum(store.getState().num);
    })

    return (
        <DisplayNumber num={num} unit="kg"/>
    )
}
