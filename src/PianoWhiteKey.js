import React, { Component } from 'react';
class PianoWhiteKey extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        key: props.value,
      };
    }
  
    render() {
      return (
        <div style={{
          display: "flex",
          width: "40px",
          height: "120px",
          background: "white",
          border: "solid black",
          borderWidth: "1px 1px 1px 0px"
          }}>
          <div style={{
            display: "flex",
            height: "40px",
            width: "100%",
            background: this.props.value.pressed ? "red": "white",
            color: this.props.value.pressed ? "white": "black",
            marginTop: "auto",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{ display: "flex"}}>
              { this.props.value.note }
            </div>
          </div>
        </div>
      );
    }
  }
  export default PianoWhiteKey;