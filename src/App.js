import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PianoKeyboard from './PianoKeyboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PianoKeyboard value = {
          {
            notesPressed: ["C1", "E1", "G1"]
          }
        }/>
        <PianoKeyboard value = {
          {
            notesPressed: ["E1", "G1", "B1"]
          }
        }/>
        <PianoKeyboard value = {
          {
            notesPressed: ["B1", "D2", "F2"]
          }
        }/>
        <PianoKeyboard value = {
          {
            notesPressed: ["C#2", "E2", "G2"]
          }
        }/>
      </div>
    );
  }
}

export default App;
