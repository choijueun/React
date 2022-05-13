import React from 'react'

function Update(props) {
    const topics = props.topics;
    let topic = null;
    const id = Number(props.id);

    for(let i=0; i<topics.length; i++){
        if(topics[i].id === id){
            topic = topics[i];
        }
    }

    const updateSubmit = function(){
        const updateForm = document.querySelector('#updateForm');
        const title = updateForm.title.value;
        const content = updateForm.content.value;
        props.updateTopic(id, title, content);
    }
    return (
        <>
        <h2>UPDATE</h2>
        <form id="updateForm">
            <div>
                <input type="text" name="title" placeholder='TITLE' value={topic.title}></input>
            </div>
            <div>
                <textarea name="content" placeholder='CONTENT' value={topic.body}></textarea>
            </div>
            <button type="button" className="submitBtn"onClick={updateSubmit}>
                SUBMIT
            </button>
        </form>
        </>
    )
}

export default Update