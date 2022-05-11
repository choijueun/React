import React from 'react'

function Create() {
return (
    <>
    <h2>CREATE</h2>
    <form id="create">
        <div>
            <input type="text" placeholder='TITLE'></input>
        </div>
        <div>
            <textarea placeholder='CONTENT'></textarea>
        </div>
        <button className="submitBtn">SUBMIT</button>
    </form>
    </>
    )
}

export default Create