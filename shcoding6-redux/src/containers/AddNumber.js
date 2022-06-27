import { connect } from "react-redux";
import AddNumber from "../components/AddNumber";


function mapReduxDispatchToReactProps(dispatch){
    return {
        onClick: function(size) {
            dispatch({type: 'INCREMENT', size: size})
        }
    }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber)

/*
import React, {useState} from 'react';
import AddNumber from '../components/AddNumber';
import store from '../store';

export default function() {
    const [size, setSize] = useState(1);
    const addNum = function(){
        store.dispatch({type: 'INCREMENT', size: size})
    }
    const onChangeSize = function(e) {
        setSize(Number(e.target.value));
    }

    return (
        <AddNumber size={size} onClick={addNum} onChangeSize={onChangeSize}/>
    )
}
*/