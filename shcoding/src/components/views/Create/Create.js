import React from 'react'

function Create() {
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
        <button type="button" className="submitBtn">SUBMIT</button>
    </form>
    </>
    )
}

export default Create