import React, { Component } from 'react';
import { Scale, Note } from 'tonal'

import PianoWhiteKey from './PianoWhiteKey.js';
import PianoBlackKey from './PianoBlackKey.js';

class PianoKeyboard extends Component {
    constructor(props) {
      super(props);
    }
  
    renderKey(key, index) {
        key.pressed = this.props.notesPressed.map(note => Note.chroma(note)).includes(Note.chroma(key.note));
        return (
            (key.type === "white") ?
                <PianoWhiteKey key={"pianoKey_" + index} value={ key } /> :
                <PianoBlackKey key={"pianoKey_" + index} value={ key } />
        )
    }

    render() {
        return (
            <div style={{display: "inline-flex", borderLeft: "1px solid #150b13", marginBottom: "20px"}}>
            {
                Scale.notes(this.props.rootNote + " chromatic").map(function(note) {
                    return {
                        "note": note,
                        "type": (["C","D","E","F","G","A","B"].reduce(
                            (acc, cur)  => (acc || Note.chroma(cur) === Note.chroma(note)),
                            false
                        ) ? "white" : "black")
                    }
                })
                .reduce((arr, curVal, curIdx, src) => function() {
                    if(src[0].type === "black") src.unshift({
                        "note": "",
                        "type": "white"
                    })
                    if(src[src.length-1].type === "black") src.push({
                        "note": "",
                        "type": "white"
                    })
                    return src;
                }(arr, curVal, curIdx, src))
                .map((key, index) => this.renderKey(key, index)) 
            }
            </div>
        );
    }
  }

  export default PianoKeyboard;