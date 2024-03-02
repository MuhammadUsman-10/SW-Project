import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/Nav';
import Footer from './Components/Footer';

ReactDOM.render(
    <Router>
      <NavBar />
      <Footer />
    </Router>,
  document.getElementById('root'),
);

reportWebVitals();
