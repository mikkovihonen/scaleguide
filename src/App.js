import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PianoKeyboard from './PianoKeyboard.js';
import ChordSelector from './ChordSelector.js';
import * as Key from 'tonal-key';
import { Scale, Chord} from 'tonal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chords: []
    };
    this.handleChordSelectorChange = this.handleChordSelectorChange.bind(this);
  }

  handleChordSelectorChange(scale) {
    this.setState({
      chords: scale.map(chord => Chord.notes(chord))
    })
  }

  render() {
    return (
      <div>
        <ChordSelector onChange={this.handleChordSelectorChange}/>
        {this.state.chords.map((object, i) => <PianoKeyboard value = {{ notesPressed: object }}/>)}
      </div>
    );
  }
}

export default App;