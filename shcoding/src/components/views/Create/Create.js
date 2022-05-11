import React, { useEffect } from 'react'

function Create(props) {
    const createSubmit = function(){
        const createForm = document.querySelector('#createForm');
        props.onCreate(createForm.title.value, createForm.content.value);
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