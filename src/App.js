import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component 
{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React do Manel</h1>

        </header>
        <p className="App-intro">
          Hello world!! til
        </p>
        <p>
          <h2> aluno: emmanuel marinho</h2>
          <h2> matricula: 0050009525</h2>
        </p>
      </div>
    );
  }
}

export default App;