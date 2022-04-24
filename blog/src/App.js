import React, { useState } from 'react';
import './App.css';

function App() {
    // let posts = '양재동 맛집';
    let [title, mTitle] = useState( ['하데스타운', '레베카', '라흐마니노프'] );
    let [contents, updateContent] = useState( [
        {'title': '하데스타운', 'date': '2022-02-15'}
        ,{'title': '레베카', 'date': '2022-02-26'}
        ,{'title': '라흐마니노프', 'date': '2022-03-01'}
    ])
    let [recm, mRecm] = useState(0);
    function changeTitle() {
        // 복사(deep copy) spread operator
        var tmpArr = [...title]; // ... : 중괄호 제거
        // 복사본 수정
        tmpArr[0] = '노트르담 드 파리';
        // state data 변경
        mTitle(tmpArr);
    }
    return (
        <div className="App">
            <div className="black-nav">
                <div style={ {fontSize: '30px'} }>개발 Blog</div>
            </div>

            {/* changeTitle() : 바로 실행되므로 함수명만 작성 */}
            <button onClick={  }>정렬</button>

            <div className="list">
                <h3>{ contents[0]['title'] }</h3>
                <p>{ contents[0]['date'] } <span className="recmBtn" onClick={ ()=>{ mRecm( recm+1 ) } }>👍</span> {recm}</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ contents[1]['title'] }</h3>
                <p>{ contents[1]['date'] }</p>
                <hr/>
            </div>
            <div className="list">
                <h3>{ contents[2]['title'] }</h3>
                <p>{ contents[2]['date'] }</p>
                <hr/>
            </div>
        </div>
    );
}

export default App;
