import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Main from './page';

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
