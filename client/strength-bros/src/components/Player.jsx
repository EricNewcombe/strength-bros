import React, { Component } from "react";

class Player extends Component {
  state = {
    standing: true
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 32:
        this.setState(() => ({
          standing: false
        }));
        break;
      default:
        return;
    }
  };

  handleKeyUp = e => {
    switch (e.keyCode) {
      case 32:
        this.setState(() => ({
          standing: true
        }));
        break;
      default:
        return;
    }
  };

  render() {
    const { position, color } = this.props;

    const playerStyle = {
      fill: color
    };

    if (this.state.standing) {
      return (
        <rect
          id="player"
          data-name="player"
          style={playerStyle}
          x={position}
          y={-102}
          width={50}
          height={100}
        />
      );
    } else {
      return (
        <rect
          id="player"
          data-name="player"
          style={playerStyle}
          x={position - 25}
          y={-51}
          width={100}
          height={50}
        />
      );
    }
  }

  componentDidMount() {
    window.onkeydown = this.handleKeyDown;
    window.onkeyup = this.handleKeyUp;
  }
}

export default Player;