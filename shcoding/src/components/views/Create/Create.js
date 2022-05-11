import React, { useEffect } from 'react'

function Create(props) {
    const createSubmit = function(){
        const createForm = document.querySelector('#createForm');
        const title = createForm.title.value;
        const content = createForm.content.value;
        props.onCreate(title, content);
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