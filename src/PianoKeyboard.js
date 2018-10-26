import React, { Component } from 'react';

import PianoWhiteKey from './PianoWhiteKey.js';
import PianoBlackKey from './PianoBlackKey.js';


class PianoKeyboard extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
        value: null,
        notesPressed: props.value.notesPressed,
        pianoKeys: [
            {"note": "C1", "type": "white"},
            {"note": "C#1", "type": "black"},
            {"note": "D1", "type": "white"},
            {"note": "D#1", "type": "black"},
            {"note": "E1", "type": "white"},
            {"note": "F1", "type": "white"},
            {"note": "F#1", "type": "black"},
            {"note": "G1", "type": "white"},
            {"note": "G#1", "type": "black"},
            {"note": "A1", "type": "white"},
            {"note": "A#1", "type": "black"},
            {"note": "B1", "type": "white"},
            {"note": "C2", "type": "white"},
            {"note": "C#2", "type": "black"},
            {"note": "D2", "type": "white"},
            {"note": "D#2", "type": "black"},
            {"note": "E2", "type": "white"},
            {"note": "F2", "type": "white"},
            {"note": "F#2", "type": "black"},
            {"note": "G2", "type": "white"},
            {"note": "G#2", "type": "black"},
            {"note": "A2", "type": "white"},
            {"note": "A#2", "type": "black"},
            {"note": "B2", "type": "white"},
            {"note": "C3", "type": "white"},
            {"note": "C#3", "type": "black"},
            {"note": "D3", "type": "white"},
            {"note": "D#3", "type": "black"},
            {"note": "E3", "type": "white"},
            {"note": "F3", "type": "white"},
            {"note": "F#3", "type": "black"},
            {"note": "G3", "type": "white"},
            {"note": "G#3", "type": "black"},
            {"note": "A3", "type": "white"},
            {"note": "A#3", "type": "black"},
            {"note": "B3", "type": "white"}
        ]
      };
    }
  
    renderKey(key) {
        key.pressed = this.props.value.notesPressed.includes(key.note);
        return (
            (key.type == "white") ?
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