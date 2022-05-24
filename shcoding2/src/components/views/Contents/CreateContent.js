import React from 'react'

function CreateContent() {
  return (
    <article>
        <h2>CREATE</h2>
        <form>
            <div>
                <input type='text' name="title" placeholder='TITLE'></input>
            </div>
            <div>
                <textarea name="content" placeholder='CONTENT'></textarea>
            </div>
            <div className='submit'>
                <button>SUBMIT</button>
            </div>
        </form>
    </article>
  )
}

export default CreateContent