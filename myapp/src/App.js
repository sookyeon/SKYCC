import logo from './logo.svg';
import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routers/Home';
import Meeting from './routers/Meeting';
import Mate from './routers/Mate';

const Navbox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
// Components for each page

function App() {

  return (
    <Router>
      <Navbox>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Meeting</Link>
            </li>
            <li>
              <Link to="/contact">Mate</Link>
            </li>
          </ul>
        </nav>
      </Navbox>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Meeting />} />
          <Route path="/contact" element={<Mate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
