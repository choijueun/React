import React from 'react'

function Create() {
return (
    <div id="create">
        <div>
            <input type="text" placeholder='TITLE'></input>
        </div>
        <div>
            <textarea placeholder='CONTENT'></textarea>
        </div>
        <button className="submitBtn">SUBMIT</button>
    </div>
    )
}

export default Create