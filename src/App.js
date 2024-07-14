import React from 'react';
import './App.css';

import Navbar from './Navbar/';
import BlogList from './BlogList';
// import Post from './Post/index.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogList />
      {/* <Post/> */}

    </div>
  );
}

export default App;
