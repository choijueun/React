import React from 'react'

function CreateContent() {
  return (
    <article>
        <div>
            <input type='text' name="title" placeholder='TITLE'></input>
        </div>
        <div>
            <textarea name="content" placeholder='CONTENT'></textarea>
        </div>
        <div className='submit'>
            <button>SUBMIT</button>
        </div>
    </article>
  )
}

export default CreateContent