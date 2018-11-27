import React, { Component } from 'react';
import { Note } from 'tonal'

import PianoWhiteKey from './PianoWhiteKey.js';
import PianoBlackKey from './PianoBlackKey.js';

class PianoKeyboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
        notesPressed: props.value.notesPressed,
        pianoKeys: [
            {"note": "C", "type": "white"},
            {"note": "C#", "type": "black"},
            {"note": "D", "type": "white"},
            {"note": "D#", "type": "black"},
            {"note": "E", "type": "white"},
            {"note": "F", "type": "white"},
            {"note": "F#", "type": "black"},
            {"note": "G", "type": "white"},
            {"note": "G#", "type": "black"},
            {"note": "A", "type": "white"},
            {"note": "A#", "type": "black"},
            {"note": "B", "type": "white"},
        ]
      };
    }
  
    renderKey(key) {
        key.pressed = this.props.value.notesPressed.map(note => Note.chroma(note)).includes(Note.chroma(key.note));
        return (
            (key.type === "white") ?
                <PianoWhiteKey value={ key } /> :
                <PianoBlackKey value={ key } />
        )
    }

    render() {
        const listItems = this.state.pianoKeys.map((key) =>
            this.renderKey(key)
        );
        return (
            <div>
            <div style={{display: "flex", borderLeft: "1px solid black"}}>
                { listItems }
            </div>
            <div style={{height:"20px"}}></div>
            </div>
        );
    }
  }

  export default PianoKeyboard;