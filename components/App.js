import React, { Component } from 'react';
import PianoKeyboard from './PianoKeyboard.js';
import ChordSelector from './ChordSelector.js';
import * as Key from 'tonal-key';
import { Chord, Scale } from 'tonal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rootNote: (props.note !== undefined) ? props.note : "C",
      mode: (props.mode !== undefined) ? props.mode : "major",
      type: (props.type !== undefined) ? props.type : "triads",
      chords: [],
      degrees: [],
      scale: []
    };
    this.handleChordSelectorChange = this.handleChordSelectorChange.bind(this);
  }

  handleChordSelectorChange(note, mode, type) {
    const scaleString = [note, mode].join(" ");
    if(typeof this.props.onSelectorChange === "function") this.props.onSelectorChange(note, mode, type);
    this.setState({
      rootNote: note,
      scale: Scale.notes(scaleString),
      chords: (("triads" === type) ? Key.triads(scaleString) : Key.chords(scaleString)).map(chord => Chord.notes(chord)),
      degrees: Key.degrees(scaleString)
    }) 
  }

  render() {
    return (
      <div>
      <h2 className="printOnly">{ this.state.rootNote + " " + this.state.mode }</h2>
      <ChordSelector
        onChange = { this.handleChordSelectorChange }
        note = { this.state.rootNote }
        mode = { this.state.mode }
        type = { this.state.type }
      />
      <h2>Notes</h2>
        <PianoKeyboard notesPressed={this.state.scale} rootNote={this.state.rootNote}/>
      <h2>Degrees</h2>
      <div id="chordsWrapper">
        { this.state.chords.map(
          (object, i) =>
          <div key={"pianoKeyboardWrapper_" + i} style={{ display: "flex"}}>
            <div style={{ display: "flex", marginBottom: "10px"}}>
              <h2 style={{width: "30px", textAlign: "center"}}>{this.state.degrees[i]}</h2>
              <PianoKeyboard key={"pianoKeyboard_" + i} notesPressed = {object} rootNote="C" />
            </div>
          </div>
        ) }
      </div>
      </div>
    );
  }
}

export default App;