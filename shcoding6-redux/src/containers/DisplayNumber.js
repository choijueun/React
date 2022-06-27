import { connect } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";
export default connect()(DisplayNumber) 
/*
import React, {useState} from 'react';
import DisplayNumber from '../components/DisplayNumber';
import store from '../store';

export default function(props) {
    const [num, setNum] = useState(store.getState().num);
    store.subscribe(function(){
        setNum(store.getState().num);
    })

    return (
        <DisplayNumber num={num} unit={props.unit}/>
    )
}
*/