import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import TOC from './components/views/TOC/TOC';
import Header from './components/views/Header/Header';
import Main from './components/views/Main/Main';
import Blog from './components/views/Blog/Blog';
import Guest from './components/views/Guest/Guest';

function App() {
    return <>
        <Header/>
        <Router>
            <TOC/>
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/blog/' element={<Blog/>}></Route>
                <Route path='/blog/:topic_id' element={<Blog/>}></Route>
                <Route path='/guest' element={<Guest/>}></Route>
                <Route path='*' element={<div>404 NOT FOUND</div>}></Route>
            </Routes>
        </Router>
    </>
}

export default App;
