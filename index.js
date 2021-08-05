import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './body'
import Sidebar from './sidebar'
import Navbar from './navbar'
import Card from './card'

ReactDOM.render(
  <React.StrictMode>
    <div className="container" >
      <Sidebar className="left_menu"/>
      <div>
        <Navbar/>
        <Body/>
        <Card/>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

