import React, { Component } from 'react';
import PianoKeyboard from './PianoKeyboard.js';
import ChordSelector from './ChordSelector.js';
import * as Key from 'tonal-key';
import { Chord } from 'tonal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chords: [],
      degrees: []
    };
    this.handleChordSelectorChange = this.handleChordSelectorChange.bind(this);
  }

  handleChordSelectorChange(note, scale, type) {
    const scaleString = [note, scale].join(" ");
    this.setState({
      chords: (("triads" === type) ? Key.triads(scaleString) : Key.chords(scaleString)).map(chord => Chord.notes(chord)),
      degrees: Key.degrees(scaleString)
    })
  }

  render() {
    return (
      <div id="backgroundWrapper">
        <div>
        <h1>Scaleguide</h1>
        <ChordSelector onChange={this.handleChordSelectorChange}/>
        <h2>Notes</h2>
        <h2>Degrees</h2>
        <div id="chordsWrapper">
          { this.state.chords.map(
            (object, i) =>
            <div key={"pianoKeyboardWrapper_" + i} style={{ display: "flex", alignItems: "center"}}>
              <h2 style={{width: "30px", textAlign: "center"}}>{this.state.degrees[i]}</h2>
              <PianoKeyboard key={"pianoKeyboard_" + i} value = {{ notesPressed: object }}/>
            </div>
          )}
        </div>
        <h2>Common chord progressions</h2>
        </div>
      </div>
    );
  }
}

export default App;