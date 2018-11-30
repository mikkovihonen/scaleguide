import React, { Component } from 'react';
import * as Key from 'tonal-key';

class ChordSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chromaticScale: "C C# D D# E F F# G G# A A# B".split(" "),
            scales: Key.modeNames(true),
            note: props.note,
            mode: props.mode,
            type: props.type
        };  
        this.handleNote = this.handleNote.bind(this);
        this.handleMode = this.handleMode.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.propagateChange(this.state.note, this.state.mode, this.state.type);
    }
  
    handleNote(event) {
        this.setState({
            note: event.target.value,
        });
        this.propagateChange(event.target.value, this.state.mode, this.state.type);
    }
    handleMode(event) {
        this.setState({
            mode: event.target.value,
        });
        this.propagateChange(this.state.note, event.target.value, this.state.type);
    }
    handleType(event) {
        this.setState({
            type: event.target.value,
        });
        this.propagateChange(this.state.note, this.state.mode, event.target.value);
    }

    propagateChange(note, mode, type) {
        if(typeof this.props.onChange === "function") {
            this.props.onChange(note, mode, type);
        }
    }
    
    handleSubmit(event) {
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label style={{
              marginRight: "5px"
          }}>
            Key
            <select value={this.state.note} onChange={this.handleNote}>
                {this.state.chromaticScale.map((object, i) => <option key={object.toString()} value={object}>{object.replace(/^\w/, c => c.toUpperCase())}</option>)}
            </select>
          </label>
          <label style={{
              marginRight: "5px"
          }}>
            Mode
            <select value={this.state.mode} onChange={this.handleMode}>
                {this.state.scales.map((object, i) => <option key={object.toString()} value={object}>{object.replace(/^\w/, c => c.toUpperCase())}</option>)}
            </select>
          </label>
          <label>
            Type
            <select value={this.state.type} onChange={this.handleType}>
                <option value="triads">Triads</option>
                <option value="chords">Chords</option>
            </select>
          </label>
        </form>
      );
    }
  }

  export default ChordSelector;