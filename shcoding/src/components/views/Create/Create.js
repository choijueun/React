import React, { useEffect } from 'react'

function Create(props) {
    const createSubmit = function(){
        props.onCreate();
    }

    return (
        <>
        <h2>CREATE</h2>
        <form id="createForm" onSubmit={createSubmit}>
            <div>
                <input type="text" name="title" placeholder='TITLE'></input>
            </div>
            <div>
                <textarea name="content" placeholder='CONTENT'></textarea>
            </div>
            <input type="submit" className="submitBtn" value="SUBMIT"/>
        </form>
        </>
    )
}

export default Create