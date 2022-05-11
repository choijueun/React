import React, { useEffect } from 'react'

function Create(props) {
    const createSubmit = function(){
        const title = document.querySelector('#createForm [name=title]');
        const content = document.querySelector('#createForm [name=content]');
        props.onCreate(title.value, content.value);
    }

    return (
        <>
        <h2>CREATE</h2>
        <form id="createForm">
            <div>
                <input type="text" name="title" placeholder='TITLE'></input>
            </div>
            <div>
                <textarea name="content" placeholder='CONTENT'></textarea>
            </div>
            <button type="button" className="submitBtn"onClick={createSubmit}>
                SUBMIT
            </button>
        </form>
        </>
    )
}

export default Create