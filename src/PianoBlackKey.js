import React, { Component } from 'react';

class PianoBlackKey extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        value: props.value,
      };
    }
  
    render() {
      return (
        <div style={{width:"0px", display: "flex"}}>
          <div style={{
              display: "flex",
              transform: "translateX(-50%)",
              height: "70px",
              background: "black",
              color: "white",
              border: "1px solid black"
            }}>
            <div style={{
              display: "flex",
              height: "30px",
              width: "30px",
              background: this.props.value.pressed ? "red": "black",
              marginTop: "auto",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <div style={{ display: "flex" }}>
                { this.props.value.note }
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default PianoBlackKey;