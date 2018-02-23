import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './assets/styles/App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="container-fluid">
      <Main />
    </div>
  </div>
)

export default App;
