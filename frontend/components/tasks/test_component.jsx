import React, { Component } from 'react';

class TestComponent extends Component {
  constructor(props) {
    super(props);
    console.log('test component', props);
    }


  render () {

  return (
    <div>test component</div>
  );
  }
}

export default TestComponent;
