import React, { Component } from 'react';
import swal from 'sweetalert';

const DEFAULT_INPUT_TEXT = '';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: DEFAULT_INPUT_TEXT,
    };
  }

  changeText(e) {
    const text = e.target.value;

    this.setState({
      text,
    });

    /*
     * This will update the value that the confirm
     * button resolves to:
     */
    swal.setActionValue(text);
  }

  render() {
    return <input value={this.state.text} onChange={this.changeText.bind(this)} />;
  }
}

export default Input;
