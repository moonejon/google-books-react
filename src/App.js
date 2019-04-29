import React from 'react';
import Navigation from './components/Navigation/index.js';
import { List, ListItem } from './components/List/index.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
        <List>
        </List>
    </div>
  );
}

export default App;
