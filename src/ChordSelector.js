import React, { Component } from 'react';
import * as Key from 'tonal-key';

class ChordSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chromaticScale: "C C# D D# E F F# G G# A A# B".split(" "),
            scales: Key.modeNames(true),
            note: 'C',
            scale: 'major',
            type: 'triads'
        };  
        this.handleNote = this.handleNote.bind(this);
        this.handleScale = this.handleScale.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.propagateChange(this.state.note, this.state.scale, this.state.type);
    }
  
    handleNote(event) {
        this.setState({
            note: event.target.value,
        });
        this.propagateChange(event.target.value, this.state.scale, this.state.type);
    }
    handleScale(event) {
        this.setState({
            scale: event.target.value,
        });
        this.propagateChange(this.state.note, event.target.value, this.state.type);
    }
    handleType(event) {
        this.setState({
            type: event.target.value,
        });
        this.propagateChange(this.state.note, this.state.scale, event.target.value);
    }

    propagateChange(note, scale, type) {
        if(typeof this.props.onChange === "function") {
            this.props.onChange(note, scale, type);
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
            <select value={this.state.scale} onChange={this.handleScale}>
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