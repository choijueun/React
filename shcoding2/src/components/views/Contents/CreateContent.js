import React from 'react'

function CreateContent(props) {
    let chMode = props.changeHelper.chMode;
    let creCont = props.changeHelper.creCont;
    let _title, _desc = null;

    return (
        <article>
            <h2>CREATE</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                chMode('READ');
                _title = e.target.title.value;
                _desc = e.target.desc.value;
                creCont(_title, _desc);
            }}>
                <div>
                    <input type='text' name="title" placeholder='TITLE'></input>
                </div>
                <div>
                    <textarea name="desc" placeholder='CONTENT'></textarea>
                </div>
                <div className='submit'>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </article>
    )
}

export default CreateContent