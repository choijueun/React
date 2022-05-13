import React from 'react'

function Update(props) {
    const id = Number(props.id);
    const topic = props.topic;

    const updateSubmit = function(){
        const updateForm = document.querySelector('#updateForm');
        const title = updateForm.title.value;
        const content = updateForm.content.value;
        props.onUpdate(id, title, content);
    }
    return (
        <>
        <h2>UPDATE</h2>
        <form id="updateForm">
            <div>
                <input type="text" name="title" placeholder='TITLE' defaultValue={topic.title}></input>
            </div>
            <div>
                <textarea name="content" placeholder='CONTENT' defaultValue={topic.body}></textarea>
            </div>
            <button type="button" className="submitBtn"onClick={updateSubmit}>
                SUBMIT
            </button>
        </form>
        </>
    )
}

export default Update