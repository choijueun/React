import React from 'react'

function CreateContent(props) {
    let chMode = props.changeHelper.chMode;
    let creCont = props.changeHelper.creCont;
    let _title, _desc = null;

    return (
        <article>
            <h2>CREATE</h2>
            <form>
                <div>
                    <input type='text' name="title" placeholder='TITLE'></input>
                </div>
                <div>
                    <textarea name="desc" placeholder='CONTENT'></textarea>
                </div>
                <div className='submit'>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        console.log('CREATE');
                        chMode('READ');
                        _title = document.getElementsByName('title')[0].value;
                        _desc = document.getElementsByName('desc')[0].value;
                        creCont(_title, _desc);
                    }}>SUBMIT</button>
                </div>
            </form>
        </article>
    )
}

export default CreateContent