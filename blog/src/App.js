import React, { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/about" element={ <About /> }>
                    </Route>
                    <Route path="/users" element={ <Users /> }>
                    </Route>
                    <Route path="/" element={ <Home /> }>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return(
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return(
        <div>
            <h2>About</h2>
        </div>
    );
}

function Users() {
    return(
        <div>
            <h2>Users</h2>
        </div>
    );
}

export default App;
