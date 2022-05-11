import React from 'react'

function Create() {
return (
    <form id="create">
        <div>
            <input type="text" placeholder='TITLE'></input>
        </div>
        <div>
            <textarea placeholder='CONTENT'></textarea>
        </div>
        <button className="submitBtn">SUBMIT</button>
    </form>
    )
}

export default Create