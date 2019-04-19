import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div id="spin">
        <Spinner size={20} spinnerColor={"#2b3af1"} spinnerWidth={20} visible={true} />
      </div>
    );
  }
}
