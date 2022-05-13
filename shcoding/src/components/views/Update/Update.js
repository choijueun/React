import React from 'react'

function Update(props) {
    const updateSubmit = function(){
        const updateForm = document.querySelector('#updateForm');
        const title = updateForm.title.value;
        const content = updateForm.content.value;
    }
    return (
        <>
        <h2>UPDATE</h2>
        <form id="updateForm">
            <div>
                <input type="text" name="title" placeholder='TITLE'></input>
            </div>
            <div>
                <textarea name="content" placeholder='CONTENT'></textarea>
            </div>
            <button type="button" className="submitBtn"onClick={updateSubmit}>
                SUBMIT
            </button>
        </form>
        </>
    )
}

export default Update