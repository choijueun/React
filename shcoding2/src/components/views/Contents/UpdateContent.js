import React from 'react'

function UpdateContent(props) {
    let chMode = props.changeHelper.chMode;
    let updCont = props.changeHelper.updCont;

    let dTitle = props.contents.title;
    let dDesc = props.contents.desc;

    let _title, _desc = null;

    return (
        <article>
            <h2>UPDATE</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                chMode('READ');
                _title = e.target.title.value;
                _desc = e.target.desc.value;
                updCont(_title, _desc);
            }}>
                <div>
                    <input type='text' name="title" placeholder='TITLE' defaultValue={dTitle}></input>
                </div>
                <div>
                    <textarea name="desc" placeholder='CONTENT' defaultValue={dDesc}></textarea>
                </div>
                <div className='submit'>
                    <button type='submit'>SUBMIT</button>
                </div>
            </form>
        </article>
    )
}

export default UpdateContent